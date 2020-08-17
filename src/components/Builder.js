import React, { useState } from "react";
import update from "immutability-helper";
import Section from "./Section";

function Builder(props) {
  const block = "builder";

  //test form
  var test_menu = [
    {
      name: "Appetizers",
      description: "",
      items: [
        {
          name: "Nachos",
          price: "$10",
          description: "Something something something ldjbfdjsbfs akjffsdfbds lorem",
        },
        {
          name: "Mozzarella Sticks",
          price: "$10",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, repellat.",
        },
        {
          name: "Mozzarella Sticks 3",
          price: "$10",
          description: "Lorem ipsum dolor sit amet consectetur.",
        },
      ],
    },
    {
      name: "Drinks",
      description: "",
      items: [],
    },
  ];

  const [menu, setMenu] = useState(test_menu);
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
        <button className={block + "__new"} onClick={() => setSectionInput(!isSectionInput)}>
          + Add menu section
        </button>
      )}
    </main>
  );
}

export default Builder;
