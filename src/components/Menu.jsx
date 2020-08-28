import React, { useState, useEffect } from "react";
import firebase from "../imports/firebase";
import Logo from "./Logo.svg";

function Menu(props) {
  const block = "menu";

  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const menuRef = firebase.database().ref(`menus/${props.id}`);
    menuRef.once("value").then(function (snapshot) {
      if (snapshot.child("menu").exists()) {
        setMenu(snapshot.child("menu").val());
        setLoading(false);
      }
      if (snapshot.child("title").exists()) {
        setTitle(snapshot.child("title").val());
      }
    });
  }, [props.id]);

  return (
    <>
      {loading ? (
        <div className={block + "__loading"}>
          <div className={block + "__loading-logo"}>
            <img src={Logo} alt="TurboMenu Logo"></img>
          </div>
          <div className={block + "__loading-message"}>Loading your delicious menu...</div>
        </div>
      ) : (
        <div>
          <div className={block + "__header"}>
            <div className={block + "__name"}>{title}</div>
            <ul className={block + "__sections"}>
              {menu.map((item, index) => (
                <li key={index} className={`${block}__sectionButton`}>
                  <button>{item.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={block + "__content"}>
            {menu.map((section, sectionIndex) => (
              <div className={block + "__section"}>
                <div className={block + "__sectionName"}>{section.name}</div>
                <div className={block + "__sectionDescription"}>{section.description}</div>
                {section.items &&
                  section.items.map((item, itemIndex) => (
                    <div className={block + "__item"}>
                      <div className={block + "__name-price"}>
                        <div className={block + "__itemName"}>{item.name}</div>
                        <div className={block + "__itemPrice"}>{item.price}</div>
                      </div>
                      <div className={block + "__itemDescription"}>{item.description}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className={block + "__footer"}>
            Powered by
            <img src={Logo} alt="TurboMenu Logo"></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
