import React from "react";
import QRCode from "qrcode.react";
import { FaDownload, FaPrint } from "react-icons/fa";
import Logo from "./Logo.svg";

function Header(props) {
  const block = "header";

  return (
    <header className={block}>
      <nav className={block + "__nav"}>
        <a href="/" className={block + "__logo"}>
          <img src={Logo}></img>
        </a>
        <div className={block + "__right"}>
          <a className={block + "__navLink"} href="/">
            Account
          </a>
          <a className={block + "__navLink"} href="/">
            Logout
          </a>
        </div>
      </nav>
      <div className={block + "__restaurant"}>
        <h1 className={block + "__title"}>{props.restaurant}</h1>
        <a className={block + "__link"} href={props.link}>
          {props.link}
        </a>
        <div className={block + "__qr-container"}>
          <QRCode value={props.link} />
          <button className={block + "__download"}>
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
