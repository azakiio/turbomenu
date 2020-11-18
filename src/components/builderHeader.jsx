import React, { useState, useLayoutEffect } from "react"
import Meta from "../components/meta"
import QRCode from "qrcode.react"
import { FaDownload, FaSignOutAlt } from "react-icons/fa"
import Logo from "../assets/logo.svg"
import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from "gatsby"

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
      <Meta title={`TurboMenu — ${title}`} description='' />
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
      <div className={block + "__restaurant"}>
        <input
          className={block + "__title"}
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Link className={block + "__link"} to={`/${props.id}`}>
          {link}
        </Link>
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
