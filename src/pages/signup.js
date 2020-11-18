import React, { useState, useLayoutEffect } from "react"
import Meta from "../components/meta"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"
import { Link, navigate } from "gatsby"

export default function Signup() {
  const block = "signup"

  // const [invalidPass, setInvalidPass] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidId, setIsValidID] = useState(true)

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
        setIsValidID(false)
      } else {
        setIsValidID(true)
      }
    })
  }

  function validatePassword(e) {
    if (e.target.validity.typeMismatch) {
      e.target.setCustomValidity("Please use at least 6 characters.")
    } else {
      e.target.setCustomValidity("")
    }
  }

  function signUp(e) {
    e.preventDefault()
    const title = e.target.title.value
    const link = e.target.link.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (!isValidId) {
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
        setIsValidEmail(false)
      })
  }

  return (
    <div className={block}>
      <Meta title='TurboMenu — Sign up' description='TurboMenu is a free tool that allows you to create a mobile-friendly contactless menu to deliver a safer dining experience during COVID-19.' />
      <form className={`${block}__form`} onSubmit={signUp}>
        <Link to="/" className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </Link>
        <h2 className={`${block}__title`}>Create your account</h2>
        <p className={`${block}__login`}>
          Already have an account? <Link to='/login'>Log in</Link>
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

        <label className={block + "__form-label"}>
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
          {!isValidId && (
            <div className={`${block}__invalid`}>
              Sorry, this link is already taken. Please try again.
            </div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Email
          <input name='email' type='email' placeholder='email@example.com' />
          {!isValidEmail && (
            <div className={`${block}__invalid`}>
              This email is already in use, please <Link to='/login'>Login</Link>
            </div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Password
          <input
            name='password'
            type='password'
            required
            minLength='6'
            placeholder='Use at least 6 characters'
            onChange={validatePassword}
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
