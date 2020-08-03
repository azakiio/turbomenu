import React from "react";
import QRCode from "qrcode.react";
import { FaDownload, FaPrint } from 'react-icons/fa';

function Header(props) {
  const block = "header"

  return (
    <header className={block}>
      <nav className={block + '__nav'}>
        <a href="/" className={block + '__logo'}>
          TurboMenu
        </a>
        <div className={block + "__right"}>
          <a className={block + "__button"} href="/">Account</a>
          <a className={block + "__button"} href="/">Logout</a>
        </div>
      </nav>
      <div className={block + "__restaurant"}>
        <h1 className={block + "__title"}>{props.restaurant}</h1>
        <p classNamer={block + "__link"}>{props.link}</p>
        <div>
          <QRCode value={props.link} />
          <div>
            <button><FaDownload /> Download</button>
            <button><FaPrint /> Print</button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
