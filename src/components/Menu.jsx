import React, { useState, useEffect } from "react";
import firebase from "../imports/firebase";

function Menu(props) {
  const block = "menu";

  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState("Loading...");
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    const menuRef = firebase.database().ref(`menus/${props.id}`);
    menuRef.once("value").then(function (snapshot) {
      if (snapshot.child("menu").exists()) {
        setMenu(snapshot.child("menu").val());
        console.log(snapshot.child("menu").val());
        setInvalid(false);
      }
      if (snapshot.child("title").exists()) {
        setTitle(snapshot.child("title").val());
        console.log(snapshot.child("title").val());
      }
    });
  }, [props.id]);

  return (
    <>
      {invalid ? (
        <div>No Menu Found</div>
      ) : (
        <div>
          <div className={block + "__header"}>
            <div className={block + "__name"}>{title}</div>
            <div className={block + "__sections"}>
              {menu.map((item, index) => (
                <li key={index} className={`${block}__sectionButton`}>
                  <button>{item.name}</button>
                </li>
              ))}
            </div>
          </div>
          <div className={block + "__content"}>
            <div className={block + "__section"}>
              {menu.map((section, sectionIndex) => (
                <>
                  <div className={block + "__sectionName"}>{section.name}</div>
                  <div className={block + "__sectionDescription"}>{section.description}</div>
                  {section.items && section.items.map((item, itemIndex) => (
                    <div className={block + "__item"}>
                      <div className={block + "__name-price"}>
                        <div className={block + "__itemName"}>{item.name}</div>
                        <div className={block + "__itemPrice"}>{item.price}</div>
                      </div>
                      <div className={block + "__itemDescription"}>{item.description}</div>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
