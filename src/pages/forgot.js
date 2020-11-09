import React from "react"
import Logo from "../assets/logo.svg"
//import firebase from "gatsby-plugin-firebase"
//import { navigate } from "gatsby"

function Forgot() {
  const block = "forgot"


  return (
    <div className={block}>
      <form className={`${block}__form`}>
        <div className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </div>
        <h2 className={`${block}__title`}>Reset your password</h2>

        <label className={`${block}__form-100`}>
          Email
          <input name='email' type='email' required />
        </label>

        <div className={block + "__form-buttons"}>
          <button type='submit' className={block + "__form-add"}>
            Send me a password reset link
          </button>
        </div>
      </form>
    </div>
  )
}


