import React from "react";
import Logo from "../assets/logo.svg"
import Man from "../assets/404.png"


//TODO
export default function NotFound() {
    
    const block = "error"


    return(
        <div className={block}>
            <img src={Logo} alt="TurboMenu Logo"></img>
           
            <img className={`${block}-img`} src={Man} alt="Man searching underground"></img>

            <h1>
            Oops, the page you’re looking for doesn’t exist.
            </h1>

            <a href="http://turbo.menu/">
                Back to homepage
            </a>

        </div>
    )
}