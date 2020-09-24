import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { FaDownload } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

function Header(props) {
  const block = "header";
  const link = `https://turbo.menu/${props.id}`;
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const titleRef = firebase.database().ref(`menus/${props.id}/title`);
    titleRef.on("value", function (snapshot) {
      setTitle(snapshot.val());
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        navigate("/login");
      }
    });
  }, [props.id]);

  function handleChange(e) {
    setTitle(e.currentTarget.value);
  }

  function handleBlur(e) {
    const titleRef = firebase.database().ref(`menus/${props.id}/title`);
    titleRef.set(e.currentTarget.value);
  }

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

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
        <input className={block + "__title"} value={title} onChange={handleChange} onBlur={handleBlur}/>
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
