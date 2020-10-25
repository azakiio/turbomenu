import React from "react"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"

export default function Signup() {
  const block = "signup"

  function signUp(e) {
    e.preventDefault()
    const title = e.target.title.value
    const link = e.target.link.value
    const email = e.target.email.value
    const password = e.target.password.value

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { uid } = userCredential.user
        const usersRef = firebase.database().ref(`users/`)
        usersRef.update({
          [uid]: link,
        })

        const menuRef = firebase.database().ref(`menus/${link}`)
        menuRef.update({
          title: title,
          owner: uid
        })
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

        <label className={block + "__form-100"}>
          TurboName
          <div className={`${block}__tm-link`}>
            <span className={`${block}__tm-text`}>turbo.menu/</span>
            <input
              name='link'
              type='text'
              required
              placeholder='your-restaurant'
            />
          </div>
        </label>

        <label className={block + "__form-100"}>
          Email
          <input
            name='email'
            type='email'
            required
            placeholder='email@example.com'
          />
        </label>

        <label className={block + "__form-100"}>
          Password
          <input name='password' type='password' required />
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
