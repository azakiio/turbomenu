import React from "react";
import Logo from "./Logo.svg";


function Login() {

    const block = "login";

    function login() {
        console.log("login!");
        //fire base login
    }

    return (
        <div className={block}>

            <div className={`${block}__form`}>
                <div className={`${block}__logo`}>
                    <a href="/">
                        <img src={Logo} alt="TurboMenu Logo"></img>
                    </a>
                </div>
                <div className={`${block}__title`}>Log in to your account</div>

                <label className={`${block}__form-100`}>
                    Email
                    <input name="name" type="text" required />
                </label>

                <label className={block + "__form-description"}>
                    Password
                    <input name="password" type="password" required />
                </label>

                <div className={block + "__form-buttons"}>
                    <button onClick={login} type="submit" className={block + "__form-add"}>
                        Log in
                    </button>
                </div>

            </div>

        </div>

    );
}

export default Login;