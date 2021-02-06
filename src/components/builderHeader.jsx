import React, { useState, useEffect } from "react"
import Meta from "../components/meta"
import QRCode from "qrcode.react"
import { FaDownload, FaSignOutAlt } from "react-icons/fa"
import Logo from "../assets/logo.svg"
import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from "gatsby"

export default function BuilderHeader(props) {
  const { turboId } = props
  const block = "header"
  const link = `https://turbo.menu/${turboId}`
  const [title, setTitle] = useState("Loading...")
  const [downloadLink, setDownloadLink] = useState("")

  useEffect(() => {
    const titleRef = firebase.database().ref(`menus/${turboId}/title`)
    titleRef.on("value", function (snapshot) {
      setTitle(snapshot.val())
    })

    const canvas = document.getElementById("QR-code")
    setDownloadLink(canvas.toDataURL("image/png"))
  }, [turboId])

  function handleChange(e) {
    setTitle(e.currentTarget.value)
  }

  function handleBlur(e) {
    const titleRef = firebase.database().ref(`menus/${turboId}/title`)
    titleRef.set(e.currentTarget.value)
  }

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        navigate("/login")
      })
      .catch(function (error) {
        console.log(error.message)
      })
  }

  return (
    <header className={block}>
      <Meta title={`TurboMenu — ${title}`}/>
      <nav className={block + "__nav"}>
        <Link to='/' className={block + "__logo"}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </Link>
        <div className={block + "__right"}>
          <button onClick={logout} className={block + "__navLink"}>
            <FaSignOutAlt /> Log out
          </button>
        </div>
      </nav>
      <div className={block + "__information"}>

      <div className={block + "__restaurant"}>
        <input
          className={block + "__title"}
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Link className={block + "__link"} to={`/${turboId}`}>
          {link}
        </Link>
        <div className={block + "__qr-container"}>
          <QRCode id='QR-code' value={link} />
          <a
            href={downloadLink}
            download={`${turboId}-QR.png`}
            className={block + "__download"}
          >
            <FaDownload /> Download QR code
          </a>
        </div>
      </div>

      <div className={block + "__account"}>
        <h2>Account settings</h2>
        <p>accountemail@gmail.com</p>
        <button>Change email address</button>
        <button>Change password</button>
      </div>

      </div>
      
    </header>
  )
}
