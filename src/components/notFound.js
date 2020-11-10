import React from "react"
import Logo from "../assets/logo.svg"
import Man from "../assets/404.png"
import { Link } from "gatsby"

export default function NotFound() {
  const block = "error"

  return (
    <div className={block}>
      <img src={Logo} alt='TurboMenu Logo' />

      <img
        className={`${block}-img`}
        src={Man}
        alt='Man searching underground'
      />
      <h1>Oops, the page you’re looking for doesn’t exist.</h1>

      <Link href='/'>Back to homepage</Link>
    </div>
  )
}
