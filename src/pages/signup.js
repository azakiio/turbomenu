import React, { useEffect } from "react"
import { useFormik } from "formik"

import Meta from "../components/meta"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"
import { Link, navigate } from "gatsby"

export default function Signup() {
  const block = "signup"

  const invalid = name => {
    if(formik.touched[name] && formik.errors[name]){
      return { border: "2px solid #e00000", background: "#ffe7e7" }
    }
    return null;
  }
  const validate = async values => {
    const errors = {}
    if (!values.title) {
      errors.title = "Required"
    }

    if (!values.link) {
      errors.link = "Required"
    } else if (!/^[\w'-]+$/.test(values.link)) {
      errors.link =
        "Links can only contain alphanumerics, underscores, hyphens, and apostrophes"
    } else {
      const menuRef = firebase.database().ref(`menus/${values.link}`)
      const snapshot = await menuRef.once("value")
      if (snapshot.exists()) {
        errors.link =
          "Sorry, that link is already taken. If this is your restaurant, please contact us"
      }
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    if (!values.password) {
      errors.password = "Required"
    } else if (values.password.length <= 6) {
      errors.password = "Must be at least 6 characters"
    }

    return errors
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigate("/builder")
      }
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: values => {
      const title = values.title
      const link = values.link
      const email = values.email
      const password = values.password

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
          navigate("/login")
        })
    },
  })

  return (
    <div className={block}>
      <Meta
        title='TurboMenu — Sign up'
        description='TurboMenu is a free tool that allows you to create a mobile-friendly contactless menu to deliver a safer dining experience during COVID-19.'
      />
      <form className={`${block}__form`} onSubmit={formik.handleSubmit}>
        <Link to='/' className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </Link>
        <h2 className={`${block}__title`}>Create your account</h2>
        <p className={`${block}__login`}>
          Already have an account? <Link to='/login'>Log in</Link>
        </p>

        <label className={`${block}__form-label`}>
          Your Restaurant's Name
          <input
            name='title'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder="A&amp;F's Bar &amp; Grill"
            style={invalid("title")}
          />
          {formik.touched.title && formik.errors.title && (
            <div className={`${block}__invalid`}>{formik.errors.title}</div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Custom Link
          <div className={`${block}__tm-link`}>
            <span className={`${block}__tm-text`}>turbo.menu/</span>
            <input
              name='link'
              type='text'
              placeholder='your-restaurant'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.link}
              style={invalid("link")}
            />
          </div>
          {formik.touched.link && formik.errors.link && (
            <div className={`${block}__invalid`}>{formik.errors.link}</div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Email
          <input
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='email@example.com'
            style={invalid("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={`${block}__invalid`}>{formik.errors.email}</div>
          )}
        </label>

        <label className={block + "__form-label"}>
          Password
          <input
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder='Use at least 6 characters'
            style={invalid("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={`${block}__invalid`}>{formik.errors.password}</div>
          )}
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
