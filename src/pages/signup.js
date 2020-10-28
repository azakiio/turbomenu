import React, { useRef, useState, useLayoutEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"
import { navigate } from "gatsby"

export default function Signup() {
  const block = "signup"
  const turboId = useRef()

  // const [invalidPass, setInvalidPass] = useState(false)
  // const [invalidEmail, setInvaliedEmail] = useState(false)
  const [invalidID, setInvalidID] = useState(false)

  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigate("/builder")
      }
    })
  }, [])

  function checkExists(e) {
    if (e.target.value < 3) {
      return
    }
    const menuRef = firebase.database().ref(`menus/${e.target.value}`)
    menuRef.once("value").then(snapshot => {
      if (snapshot.exists()) {
        setInvalidID(true)
      } else {
        setInvalidID(false)
      }
    })
  }

  function signUp(e) {
    e.preventDefault()
    const title = e.target.title.value
    const link = e.target.link.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (e.target.password.validity.typeMismatch) {
      e.target.password.setCustomValidity("Please use at least 6 characters.")
    } else {
      e.target.password.setCustomValidity("")
    }

    if (invalidID) {
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { uid } = userCredential.user
        const menuRef = firebase.database().ref(`menus/${link}`)
        menuRef.update({
          title: title,
          owner: uid,
        })

        const usersRef = firebase.database().ref(`users/`)
        usersRef.update({
          [uid]: link,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className={block}>
      <form className={`${block}__form`} onSubmit={signUp}>
        <div className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </div>
        <h2 className={`${block}__title`}>Create your account</h2>
        <p className={`${block}__login`}>
          Already have an account? <a href='/login'>Log in</a>
        </p>

        <label className={`${block}__form-100`}>
          Your Restaurant's Name
          <input
            name='title'
            type='text'
            required
            placeholder="A&amp;F's Bar &amp; Grill"
          />
        </label>

        <label ref={turboId} className={block + "__form-label"}>
          Custom Link
          <div className={`${block}__tm-link`}>
            <span className={`${block}__tm-text`}>turbo.menu/</span>
            <input
              name='link'
              type='text'
              required
              placeholder='your-restaurant'
              onChange={checkExists}
            />
          </div>
          {invalidID && (
            <div className={`${block}__invalid`}>
              Sorry, this link is already taken. Please try again.
            </div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Email
          <input name='email' type='text' placeholder='email@example.com' />
        </label>

        <label className={block + "__form-label"}>
          Password
          <input
            name='password'
            type='password'
            required
            minlength='6'
            placeholder='Use at least 6 characters'
          />
        </label>

        <div className={block + "__form-buttons"}>
          <button type='submit' className={block + "__form-add"}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}
