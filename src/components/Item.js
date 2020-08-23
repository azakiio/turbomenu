import React, { useState } from "react";
import { FaGripVertical, FaPen, FaTrash } from "react-icons/fa";

function Item(props) {
  const block = "item";
  const [isEditing, setEditing] = useState(props.firstTime);

  function updateItem(sectionIndex, index, event) {
    props.updateItem(sectionIndex, index, event);
    setEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={
            props.firstTime
              ? (e) => props.addItem(props.sectionIndex, e)
              : (e) => updateItem(props.sectionIndex, props.index, e)
          }
          className={block + "__form"}>
          <label className={block + "__form-name"}>
            Item name
            <input name="name" type="text" defaultValue={props.name} required />
          </label>
          <label className={block + "__form-price"}>
            Price
            <input name="price" type="text" defaultValue={props.price} required />
          </label>
          <label className={block + "__form-description"}>
            Description (Optional)
            <input name="description" type="text" defaultValue={props.description} />
          </label>
          <div className={block + "__form-buttons"}>
            <button type="submit" className={block + "__form-add"}>
              Save
            </button>
            <button type="reset" onClick={props.firstTime ? props.cancelItem : () => setEditing(false)} className={block + "__form-cancel"}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
          <div className={block}>
            <div className={block + "__left"}>
              {/* <FaGripVertical /> */}
            </div>

            <div className={block + "__center"}>
              <div className={block + "__name-price"}>
                <div className={block + "__name"}>{props.name}</div>
                <div className={block + "__price"}>{props.price}</div>
              </div>
              <div className={block + "__description"}>{props.description}</div>
            </div>

            <div className={block + "__right"}>
              <button className={block + "__button"}><FaPen onClick={() => setEditing(true)} />{" "}</button>
              <button className={block + "__button"}><FaTrash onClick={() => props.deleteItem(props.sectionIndex, props.index)} /></button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Item;
