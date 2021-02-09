import React from "react"
import Logo from "../assets/logo.svg"
import { Link } from "gatsby"

const globalHeader = React.forwardRef((props, ref) => {
  const block = "globalHeader"

  return (
    <header className={`${block}`}>
      
      <div className={`${block}-left`}>
        <Link to="/"><img src={Logo} alt='TurboMenu Logo'></img></Link>
        {/* <div>
          <Link className={`${block}-secondaryLink`} to='/about'>
            About Us
          </Link>
        </div> */}
      </div>

      <div className={`${block}-right`}>
        <Link className={`${block}-secondaryLink`} to='/login'>
          Log in
        </Link>
        <Link className={`${block}-primaryLink`} to='/signup'>
          Sign up
        </Link>
      </div>
    </header>
  )
})

export default globalHeader
