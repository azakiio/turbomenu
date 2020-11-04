import React, { useLayoutEffect } from "react"
import Logo from "../assets/logo.svg"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

function Login() {
  const block = "login"

  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigate("/builder")
      }
    })
  }, [])

  function login(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error.message)
      })
  }

  return (
    <div className={block}>
      <form className={`${block}__form`} onSubmit={login}>
        <div className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </div>
        <h2 className={`${block}__title`}>Log in to your account</h2>
        <p className={`${block}__signup`}>
          Don't have an account yet? <a href='/signup'>Sign up</a> <br />
          <a href='/forgot'>Forgot your password?</a>
        </p>

        <label className={`${block}__form-100`}>
          Email
          <input name='email' type='email' required />
        </label>

        <label className={block + "__form-description"}>
          Password
          <input name='password' type='password' required />
        </label>

        <div className={block + "__form-buttons"}>
          <button type='submit' className={block + "__form-add"}>
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
