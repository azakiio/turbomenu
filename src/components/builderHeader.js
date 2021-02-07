import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import Swal from "sweetalert2"
import Meta from "./meta"
import QRCode from "qrcode.react"
import { FaDownload, FaSignOutAlt } from "react-icons/fa"
import turboSwal from "../components/turboSwal"
import Logo from "../assets/logo.svg"

export default function BuilderHeader(props) {
  const { turboId } = props
  const block = "header"
  const link = `https://turbo.menu/${turboId}`
  const [title, setTitle] = useState("Loading...")
  const [downloadLink, setDownloadLink] = useState("")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const titleRef = firebase
      .database()
      .ref(`menus/${turboId.toLowerCase()}/title`)
    titleRef.on("value", function (snapshot) {
      setTitle(snapshot.val())
    })

    const canvas = document.getElementById("QR-code")
    setDownloadLink(canvas.toDataURL("image/png"))

    setUserEmail(firebase.auth().currentUser.email)
  }, [turboId])

  function handleChange(e) {
    setTitle(e.currentTarget.value)
  }

  function handleBlur(e) {
    const titleRef = firebase
      .database()
      .ref(`menus/${turboId.toLowerCase()}/title`)
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

  async function changeEmail() {
    const { value: email } = await turboSwal.fire({
      title: "Change your email address",
      input: "email",
      inputPlaceholder: "Enter your new email address",
    })

    if (email) {
      firebase
        .auth()
        .currentUser.updateEmail(email)
        .then(function () {
          Swal.fire({
            title: `Email has been updated to: ${email}`,
            icon: "success",
          })
        })
        .catch(function (error) {
          Swal.fire({
            title:
              "Opps! Something went wrong. If this keeps happening, please contact us",
            icon: "error",
          })
        })
    }
  }

  function changePassword() {
    turboSwal
      .fire({
        title: `A Password reset email will be sent to: ${userEmail}`,
      })
      .then(result => {
        if (result.isConfirmed) {
          firebase
            .auth()
            .sendPasswordResetEmail(userEmail)
            .then(function () {
              Swal.fire({
                title: `Password Reset email sent to: ${userEmail}`,
                icon: "success",
              })
            })
            .catch(function (error) {
              Swal.fire({
                icon: "error",
                title:
                  "Opps! Something went wrong. If this keeps happening, please contact us",
              })
            })
        }
      })
  }

  return (
    <header className={block}>
      <Meta title={`TurboMenu — ${title}`} />
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
          <p>{userEmail}</p>
          <button onClick={changeEmail}>Change email address</button>
          <button onClick={changePassword}>Change password</button>
        </div>
      </div>
    </header>
  )
}
