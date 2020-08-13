import React, { useState } from "react";
import update from "immutability-helper";
import { FaChevronRight, FaChevronDown, FaEllipsisH, FaGripVertical, FaPen, FaTrash } from "react-icons/fa";

function Builder(props) {
  const block = "builder";
  const [menu, setMenu] = useState([]);
  const [isSectionInput, setSectionInput] = useState(false);

  function addSection(event) {
    event.preventDefault();
    setMenu(
      update(menu, {
        $push: [{ name: event.target.name.value, description: event.target.description.value, items: [] }],
      })
    );
    setSectionInput(false);
  }

  function deleteSection(i) {
    setMenu(update(menu, { $splice: [[i, 1]] }));
  }

  function cancelSection() {
    setSectionInput(false);
  }

  function addItem(i, event) {
    event.preventDefault();
    setMenu(
      update(menu, {
        [i]: {
          items: {
            $push: [
              {
                name: event.target.name.value,
                price: event.target.price.value,
                description: event.target.description.value,
              },
            ],
          },
        },
      })
    );
  }

  return (
    <main className={block}>
      <h2 className={block + "__title"}>Menu</h2>
      {!menu.length && <p>Start building your menu by adding your first menu section.</p>}
      <div className={block + "__menu"}>
        {menu.map((item, index) => (
          <Section
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            items={item.items}
            addItem={addItem}
            addSection={addSection}
            deleteSection={deleteSection}
            // updateSection={updateSection}
            cancelSection={cancelSection}
            firstTime={false}
          />
        ))}
      </div>
      {isSectionInput && (
        <Section
          addItem={addItem}
          addSection={addSection}
          deleteSection={deleteSection}
          // updateSection={updateSection}
          cancelSection={cancelSection}
          firstTime={true}
        />
      )}
      {!isSectionInput && (
        <button className={block + "__new"} onClick={() => setSectionInput(!isSectionInput)}>
          + Add menu section
        </button>
      )}
    </main>
  );
}

function SectionInput(props) {
  const block = "inputForm";
  return (
    <form onSubmit={props.handleSubmit} className={block + "__form"}>
      <label className={block + "__name"}>
        Name
        <input name="name" type="text" required />
      </label>
      <label className={block + "__description"}>
        Description (Optional)
        <input name="description" type="text" />
      </label>
      <div className={block + "__buttons"}>
        <button type="submit" className={block + "__add"}>
          Add
        </button>
        <button type="reset" onClick={props.handleCancel} className={block + "__cancel"}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function Section(props) {
  const block = "section";
  const [isItemInput, setItemInput] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEditing, setEditing] = useState(props.firstTime);

  function cancelItem() {
    setItemInput(false);
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function SubMenu(props) {
    return (
      <React.Fragment>
        {props.open ? <FaChevronDown onClick={props.toggleMenu} /> : <FaChevronRight onClick={props.toggleMenu} />}
      </React.Fragment>
    );
  }

  return (
    <section className={block}>
      {!isEditing ? (
        <div className={block + "__header"}>
          <div className={block + "__left"}>
            <div className={block + "__buttons"}>
              <FaGripVertical />
              <SubMenu open={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            <div className={block + "__content"}>
              <div className={block + "__title"}>{props.name}</div>
              <div className={block + "__description"}>{props.description}</div>
            </div>
          </div>

          <div className={block + "__right"}>
            <FaPen />
            <FaTrash onClick={() => props.deleteSection(props.index)} />
          </div>
        </div>
      ) : (
        <form onSubmit={props.handleSubmit} className={block + "__form"}>
          <label>
            Name <input name="name" type="text" required />
          </label>
          <label>
            Description (Optional): <input name="description" type="text" />
          </label>
          <div className={block + "__form-buttons"}>
            <button type="submit" className={block + "__add"}>
              Add
            </button>
            <button type="reset" onClick={props.handleCancel} className={block + "__cancel"}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {isMenuOpen && (
        <div>
          <div className={block + "__items"}>
            {props.items.map((item, index) => (
              <Item key={index} name={item.name} price={item.price} description={item.description} />
            ))}
          </div>
          {isItemInput ? (
            <ItemInput index={props.index} handleSubmit={props.addItem} handleCancel={cancelItem} />
          ) : (
            <button className={block + "__new"} onClick={() => setItemInput(!isItemInput)}>
              + Add menu item
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function ItemInput(props) {
  const block = "inputForm";
  return (
    <form onSubmit={(e) => props.handleSubmit(props.index, e)} className={block + "__form"}>
      <label className={block + "__name"}>
        Item name
        <input name="name" type="text" required />
      </label>
      <label className={block + "__price"}>
        Price
        <input name="price" type="text" required />
      </label>
      <label className={block + "__description"}>
        Description
        <input name="description" type="text" />
      </label>
      <div className={block + "__buttons"}>
        <button type="submit" className={block + "__add"}>
          Add
        </button>
        <button type="reset" onClick={props.handleCancel} className={block + "__cancel"}>
          Cancel
        </button>
      </div>
    </form>
  );
}


function Item(props) {
  return (
    <div>
      <FaGripVertical />
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>
        <FaPen /> <FaTrash />
      </div>
    </div>
  );
}

export default Builder;
