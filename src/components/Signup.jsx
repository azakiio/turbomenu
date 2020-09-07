import React from "react";
import { navigate } from "hookrouter";
import Logo from "./Logo.svg";
import firebase from "../imports/firebase";

function Signup() {
  const block = "signup"; 

  return (
    <div className={block}>
      <form className={`${block}__form`} >
        <div className={`${block}__logo`}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </div>
        <div className={`${block}__title`}>Create your account</div>

        <label className={`${block}__form-100`}>
          Your Restaurant's Name
          <input name="email" type="" required />
        </label>

        <label className={block + "__form-description"}>
          TurboMenu Link
          <input name="password" required />
        </label>

        <label className={block + "__form-description"}>
          Email
          <input name="password" type="email" required />
        </label>

        <label className={block + "__form-description"}>
          Password
          <input name="password" type="password" required />
        </label>

        <div className={block + "__form-buttons"}>
          <button type="submit" className={block + "__form-add"}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
