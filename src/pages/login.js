import React, { useLayoutEffect } from "react"
import Meta from "../components/meta"
import Logo from "../assets/logo.svg"
import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from "gatsby"

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
      <Meta title='TurboMenu — Log in' description='TurboMenu is a free tool that allows you to create a mobile-friendly contactless menu to deliver a safer dining experience during COVID-19.' />
      <form className={`${block}__form`} onSubmit={login}>
        <Link href="/" className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </Link>
        <h2 className={`${block}__title`}>Log in to your account</h2>
        <p className={`${block}__signup`}>
          Don't have an account yet? <Link href='/signup'>Sign up</Link> <br />
          <Link href='/forgot'>Forgot your password?</Link>
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
