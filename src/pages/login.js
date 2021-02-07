import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import { useFormik } from "formik"
import firebase from "gatsby-plugin-firebase"
import Swal from "sweetalert2"
import useTidio from "../hooks/useTidio"

import Logo from "../assets/logo.svg"

import Meta from "../components/meta"
import turboSwal from "../components/turboSwal"

function Login() {
  const block = "login"
  useTidio(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigate("/builder")
      }
    })
  }, [])

  const invalid = name => {
    if (formik.touched[name] && formik.errors[name]) {
      return { border: "2px solid #e00000", background: "#ffe7e7" }
    }
    return null
  }

  const validate = async values => {
    const errors = {}
    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    if (!values.password) {
      errors.password = "Required"
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: values => {
      const email = values.email
      const password = values.password
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          formik.setErrors({
            password: "Wrong Password",
          })
        })
    },
  })

  async function forgotHandler() {
    const { value: email } = await turboSwal.fire({
      title: "Reset your Password",
      input: "email",
      inputLabel: "Your email address",
      inputValue: formik.values.email,
      inputPlaceholder: "Enter your email address",
    })

    if (email) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          Swal.fire({
            title: `Password Reset email sent to: ${email}`,
            icon: "success",
          })
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Opps! We don't recognize that email",
          })
        })
    }
  }

  return (
    <div className={block}>
      <Meta
        title='TurboMenu — Log in'
        description='TurboMenu is a free tool that allows you to create a mobile-friendly contactless menu to deliver a safer dining experience during COVID-19.'
      />
      <form className={`${block}__form`} onSubmit={formik.handleSubmit}>
        <Link to='/' className={`${block}__logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </Link>
        <h2 className={`${block}__title`}>Log in to your account</h2>
        <p className={`${block}__signup`}>
          Don't have an account yet?{" "}
          <Link to='/signup' className={`${block}__link`}>
            Sign up
          </Link>{" "}
          <br />
          <button
            className={`${block}__link-button`}
            type='button'
            onClick={forgotHandler}
          >
            Forgot your password?
          </button>
        </p>

        <label className={`${block}__form-100`}>
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

        <label className={block + "__form-description"}>
          Password
          <input
            name='password'
            type='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder='Use at least 6 characte'
            style={invalid("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={`${block}__invalid`}>{formik.errors.password}</div>
          )}
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
