import React from "react"
import { Link } from "gatsby"
import BMC from "../assets/BMC.svg"

const globalFooter = React.forwardRef((props, ref) => {
  const block = "globalFooter"

  return (
    <footer className={`${block}`}>
      <p>
        Made with{" "}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{" "}
        in Toronto
      </p>
      <p>
        <Link to='/about'>About us</Link>
        {" // "}
        <Link to='/privacy'>Privacy Policy</Link>
      </p>
      <p>
        Questions? Reach out:{" "}
        <a href='mailto:hello@turbo.menu'>hello@turbo.menu</a>
      </p>
      <p>
        TurboMenu is 100% free and{" "}
        <a href='https://github.com/azakiio/turbomenu'>open-source</a>, consider
        supporting us.
      </p>
      <a
        href='https://www.buymeacoffee.com/turbomenu'
        target='_blank'
        rel='noreferrer'
      >
        <img className={`${block}__bmc`} src={BMC} alt='Buy Me A Coffee' />
      </a>
    </footer>
  )
})

export default globalFooter
