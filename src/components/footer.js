import React from "react"
import Logo from "../assets/logo.svg"
import { Link } from "gatsby"

const Footer = React.forwardRef((props, ref) => {
  const block = "footer"

  return (
    <footer ref={ref} className={block}>
      Powered by
      <Link to='/'>
        <img src={Logo} alt='TurboMenu Logo' />
      </Link>
    </footer>
  )
})

export default Footer
