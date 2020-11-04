import React, { useState, useLayoutEffect } from "react"
import QRCode from "qrcode.react"
import { FaDownload, FaSignOutAlt } from "react-icons/fa"
import Logo from "../assets/logo.svg"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

export default function BuilderHeader(props) {
  const block = "header"
  const link = `https://turbo.menu/${props.id}`
  const [title, setTitle] = useState("Loading...")

  useLayoutEffect(() => {
    const titleRef = firebase.database().ref(`menus/${props.id}/title`)
    titleRef.on("value", function (snapshot) {
      setTitle(snapshot.val())
    })
  }, [props.id])

  function handleChange(e) {
    setTitle(e.currentTarget.value)
  }

  function handleBlur(e) {
    const titleRef = firebase.database().ref(`menus/${props.id}/title`)
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
      <nav className={block + "__nav"}>
        <a href='/' className={block + "__logo"}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </a>
        <div className={block + "__right"}>
          <button onClick={logout} className={block + "__navLink"} href='/'>
            <FaSignOutAlt /> Log out
          </button>
        </div>
      </nav>
      <div className={block + "__restaurant"}>
        <input
          className={block + "__title"}
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <a className={block + "__link"} href={`/${props.id}`}>
          {link}
        </a>
        <div className={block + "__qr-container"}>
          <QRCode value={link} renderAs='svg'/>
          <button className={block + "__download"}>
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </header>
  )
}
