import React, { useState } from "react";
import firebase from "../imports/firebase";

function Menu(props) {
  const block = "menu";

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

  return (
    <div>
      <div className={block + "__header"}>
        <div className={block + "__name"}>Rex's Bar and Grill</div>
        <div className={block + "__sections"}>
          <li className={block + "__sectionButton"}>
            <button>Appetizers</button>
          </li>
          <li className={block + "__sectionButton"}>
            <button>Salads</button>
          </li>
          <li className={block + "__sectionButton"}>
            <button>Mains</button>
          </li>
          <li className={block + "__sectionButton"}>
            <button>Desserts</button>
          </li>
          <li className={block + "__sectionButton"}>
            <button>Drinks</button>
          </li>
          <li className={block + "__sectionButton"}>
            <button>Secret Menu</button>
          </li>
        </div>
      </div>

      <div className={block + "__content"}>
        <div className={block + "__section"}>
          <div className={block + "__sectionName"}>Appetizers</div>
          <div className={block + "__sectionDescription"}>
          Sinfully delicious pancakes, fluffy french toast, crêpe bretonne or hot crispy waffles. treat yourself! (we know you want to.)
          </div>
          <div className={block + "__item"}>
            <div className={block + "__name-price"}>
              <div className={block + "__itemName"}>Nachos</div>
              <div className={block + "__itemPrice"}>$10</div>
            </div>
            <div className={block + "__itemDescription"}>
              A short description about nachos and cheese and other things people want to know
            </div>
          </div>
          <div className={block + "__item"}>
            <div className={block + "__name-price"}>
              <div className={block + "__itemName"}>Nachos</div>
              <div className={block + "__itemPrice"}>$10</div>
            </div>
            <div className={block + "__itemDescription"}>
              A short description about nachos and cheese and other things people want to know
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
