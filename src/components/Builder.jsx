import React, { useState, useEffect } from "react";
import update from "immutability-helper";
import Section from "./Section";
import firebase from "../imports/firebase";


function Builder(props) {
  const block = "builder";
  const [menu, setMenu] = useState([]);
  const [isSectionInput, setSectionInput] = useState(false);

  useEffect(() => {
    const menuRef = firebase.database().ref(`menus/${props.id}/menu`);
    menuRef.once("value").then(function (snapshot) {
      setMenu(snapshot.val());
    });
  }, [props.id]);
  
  function save() {
    const menuRef = firebase.database().ref(`menus/${props.id}/menu`);
    menuRef.set(menu);
  }

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

  function updateSection(i, event) {
    event.preventDefault();
    setMenu(
      update(menu, {
        [i]: { name: { $set: event.target.name.value }, description: { $set: event.target.description.value } },
      })
    );
  }

  function deleteSection(i) {
    setMenu(update(menu, { $splice: [[i, 1]] }));
  }

  function addItem(sectionIndex, event) {
    event.preventDefault();
    setMenu(
      update(menu, {
        [sectionIndex]: {
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

  function updateItem(sectionIndex, index, event) {
    event.preventDefault();
    setMenu(
      update(menu, {
        [sectionIndex]: {
          items: {
            [index]: {
              name: { $set: event.target.name.value },
              price: { $set: event.target.price.value },
              description: { $set: event.target.description.value },
            },
          },
        },
      })
    );
  }

  function deleteItem(sectionIndex, index) {
    setMenu(update(menu, { [sectionIndex]: { items: { $splice: [[index, 1]] } } }));
  }

  return (
    <main className={block}>
      <h2 className={block + "__title"}>Menu</h2>
      {!menu.length && !isSectionInput && <p>Start building your menu by adding your first menu section.</p>}
      <div className={block + "__menu"}>
        {menu.map((item, index) => (
          <Section
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            items={item.items}
            addItem={addItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            updateSection={updateSection}
            deleteSection={deleteSection}
            firstTime={false}
          />
        ))}
      </div>
      {isSectionInput && <Section addSection={addSection} cancelSection={cancelSection} firstTime={true} />}
      {!isSectionInput && (
        <>
          <button className={block + "__new"} onClick={() => setSectionInput(!isSectionInput)}>
            + Add menu section
          </button>
          <button className={`${block}__new`} onClick={() => save()}>
            Save
          </button>
        </>
      )}
    </main>
  );
}

export default Builder;
