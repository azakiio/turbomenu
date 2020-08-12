import React from "react";
import QRCode from "qrcode.react";
import { FaDownload, FaPrint } from "react-icons/fa";

function Header(props) {
  const block = "header";

  return (
    <header className={block}>
      <nav className={block + "__nav"}>
        <a href="/" className={block + "__logo"}>
          TurboMenu
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
        <p className={block + "__link"}>{props.link}</p>
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
