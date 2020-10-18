import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"
import NotFound from "../components/notFound"

export default function Menu(props) {
  const block = "menu"

  const [menu, setMenu] = useState([])
  const [title, setTitle] = useState("Loading...")
  const [state, setState] = useState("loading")

  useEffect(() => {
    const menuRef = firebase.database().ref(`menus/${props.id}`)
    menuRef.once("value").then(function (snapshot) {
      if (!snapshot.exists()) {
        setState("notFound")
      } else {
        setState("loaded")
        setMenu(snapshot.child("menu").val())
        setTitle(snapshot.child("title").val())
      }
    })
  }, [props.id])

  function sectionScrollHandler(sectionIndex) {
    document.getElementById(sectionIndex).scrollIntoView(true)
  }

  return (
    <>
      {state === "loading" && (
        <div className={block + "__loading"}>
          <img src={Logo} alt='TurboMenu Logo'></img>
          <p className={`${block}__loading-text`}>
            Loading your delicious menu...
          </p>
        </div>
      )}
      {state === "loaded" && (
        <div>
          <div className={block + "__header"}>
            <div className={block + "__name"}>{title}</div>
            <ul className={block + "__sections"}>
              {menu.map((section, sectionIndex) => (
                <button
                  onClick={() => sectionScrollHandler(sectionIndex)}
                  key={sectionIndex}
                  className={`${block}__sectionButton`}
                >
                  {section.name}
                </button>
              ))}
            </ul>
          </div>

          <div className={block + "__content"}>
            {menu.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                id={sectionIndex}
                className={block + "__section"}
              >
                <div className={block + "__sectionName"}>{section.name}</div>
                <div className={block + "__sectionDescription"}>
                  {section.description}
                </div>
                {section.items &&
                  section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={block + "__item"}>
                      <div className={block + "__name-price"}>
                        <div className={block + "__itemName"}>{item.name}</div>
                        <div className={block + "__itemPrice"}>
                          {item.price}
                        </div>
                      </div>
                      <div className={block + "__itemDescription"}>
                        {item.description}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className={block + "__footer"}>
            Powered by
            <a href='/'>
              <img src={Logo} alt='TurboMenu Logo' />
            </a>
          </div>
        </div>
      )}
      {state === "notFound" && <NotFound />}
    </>
  )
}
