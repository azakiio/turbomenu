import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaGripVertical, FaPen, FaTrash } from "react-icons/fa";
import Item from "./Item";
function Section(props) {
  const block = "section";
  const [isItemInput, setItemInput] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEditing, setEditing] = useState(props.firstTime);

  function addItem(sectionIndex, e) {
    props.addItem(sectionIndex, e);
    setItemInput(false);
  }

  function cancelItem() {
    setItemInput(false);
  }

  function updateSection(i, event) {
    props.updateSection(i, event);
    setEditing(false);
  }

  return (
    <section className={block}>
      {isEditing ? (
        <form
          onSubmit={props.firstTime ? props.addSection : (e) => updateSection(props.index, e)}
          className={block + "__form"}>
          <label className={block + "__form-name"}>
            Name <input name="name" type="text" defaultValue={props.firstTime ? "" : props.name} required />
          </label>
          <label className={block + "__form-description"}>
            Description (Optional)
            <input name="description" type="text" defaultValue={props.firstTime ? "" : props.description} />
          </label>
          <div className={block + "__form-buttons"}>
            <button type="submit" className={block + "__form-add"}>
              Save
            </button>
            <button
              type="reset"
              onClick={props.firstTime ? props.cancelSection : () => setEditing(false)}
              className={block + "__form-cancel"}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className={block + "__header"}>
          <div className={block + "__left"}>
            <button className={block + "__buttons"}>{/* <FaGripVertical /> */}</button>
            <button className={block + "__buttons"}>
              {isMenuOpen ? <FaChevronDown onClick={() => setMenuOpen(!isMenuOpen)} /> : <FaChevronRight onClick={() => setMenuOpen(!isMenuOpen)} />}
            </button>
            <div className={block + "__content"}>
              <div className={block + "__title"}>{props.name}</div>
              <div className={block + "__description"}>{props.description}</div>
            </div>
          </div>

          <div className={block + "__right"}>
            <FaPen onClick={() => setEditing(true)} />
            <FaTrash onClick={() => props.deleteSection(props.index)} />
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div>
          <div className={block + "__items"}>
            {props.items &&
              props.items.map((item, index) => (
                <Item
                  sectionIndex={props.index}
                  key={index}
                  index={index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  updateItem={props.updateItem}
                  deleteItem={props.deleteItem}
                  firstTime={false}
                />
              ))}
          </div>
          {isItemInput ? (
            <Item sectionIndex={props.index} addItem={addItem} cancelItem={cancelItem} firstTime={true} />
          ) : (
            <div className={block + "__submenu"}>
              <button className={block + "__new"} onClick={() => setItemInput(true)}>
                + Add menu item
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Section;
