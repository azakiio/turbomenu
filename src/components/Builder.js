import React, { useState } from "react";
import update from "immutability-helper";
import { FaChevronRight, FaEllipsisH, FaGripVertical, FaPen, FaTrash } from "react-icons/fa";

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
          <Section key={index} index={index} name={item.name} description={item.description} items={item.items} addItem={addItem} />
        ))}
      </div>
      {isSectionInput && <SectionInput handleSubmit={addSection} handleCancel={cancelSection} />}
      {!isSectionInput && (
        <button className={block + "__new"} onClick={() => setSectionInput(!isSectionInput)}>
          + Add Menu section
        </button>
      )}
    </main>
  );
}

function SectionInput(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name <input name="name" type="text" required />
      </label>
      <label>
        Description (Optional): <input name="description" type="text" />
      </label>
      <button type="submit">Add</button>
      <button type="reset" onClick={props.handleCancel}>
        Cancel
      </button>
    </form>
  );
}

function Section(props) {
  const block = "section";
  const [isItemInput, setItemInput] = useState(false);

  function cancelItem() {
    setItemInput(false);
  }

  return (
    <section className={block}>
      <div className={block + "__header"}>
        <div className={block + "__left"}>
          <div className={block + "__buttons"}>
            <FaGripVertical />
            <FaChevronRight />
            {props.name}
          </div>
          <div className={block + "__description"}>{props.description}</div>
        </div>

        <div className={block + "__right"}>
          <FaEllipsisH />
        </div>
      </div>

      <div className={block + "__items"}>
      {props.items.map((item, index) => (
          <Item key={index} name={item.name} price={item.price} description={item.description}/>
        ))}
      </div>
      {isItemInput && <ItemInput index={props.index} handleSubmit={props.addItem} handleCancel={cancelItem} />}
      {!isItemInput && (
        <button className={block + "__new"} onClick={() => setItemInput(!isItemInput)}>
          + Add Item
        </button>
      )}
    </section>
  );
}

function ItemInput(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(props.index, e)}>
      <label>
        Item name <input name="name" type="text" required />
      </label>
      <label>
        Price: <input name="price" type="text" required />
      </label>
      <label>
        Description: <input name="description" type="text" />
      </label>
      <button type="submit">Add</button>
      <button type="reset" onClick={props.handleCancel}>
        Cancel
      </button>
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
      <div><FaPen /> <FaTrash /></div>
    </div>
  );
}

export default Builder;
