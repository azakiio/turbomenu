import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { FaDownload } from "react-icons/fa";
import Logo from "./Logo.svg";
import firebase from "../imports/firebase";
import { navigate } from "hookrouter";

function Header(props) {
  const block = "header";
  const link = `https://turbo.menu/${props.id}`;
  const titleRef = firebase.database().ref(`menus/${"demo"}/title`);
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    titleRef.on("value", function (snapshot) {
      setTitle(snapshot.val());
    });
  }, [titleRef]);

  function handleTitle(e) {
    titleRef.set(e.currentTarget.innerText);
  }

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <header className={block}>
      <nav className={block + "__nav"}>
        <a href="/" className={block + "__logo"}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </a>
        <div className={block + "__right"}>
          <a className={block + "__navLink"} href="/">
            Account
          </a>
          <button onClick={logout} className={block + "__navLink"} href="/">
            Logout
          </button>
        </div>
      </nav>
      <div className={block + "__restaurant"}>
        <h1 className={block + "__title"} contentEditable onBlur={handleTitle}>
          {title}
        </h1>
        <a className={block + "__link"} href={`/${props.id}`}>
          {link}
        </a>
        <div className={block + "__qr-container"}>
          <QRCode value={link} />
          <button className={block + "__download"}>
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
