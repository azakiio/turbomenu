import React from "react";
import Logo from "./Logo.svg";

function Signup() {
  const block = "signup"; 

  return (
    <div className={block}>
      <form className={`${block}__form`} >
        <div className={`${block}__logo`}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </div>
        <h2 className={`${block}__title`}>Create your account</h2>
        <p className={`${block}__login`}>Already have an account? <a href="/login">Log in</a></p>

        <label className={`${block}__form-100`}>
          Your Restaurant's Name
          <input name="" type="" required placeholder="A&amp;F's Bar &amp; Grill"/>
        </label>

        <label className={block + "__form-100"}>
          TurboMenu Link
          <div className={`${block}__tm-link`}>
              <span className={`${block}__tm-text`}>turbo.menu/</span>
              <input name="" required placeholder="your-restaurant"/>
          </div>
        </label>

        <label className={block + "__form-100"}>
          Email
          <input name="" type="email" required placeholder="email@example.com"/>
        </label>

        <label className={block + "__form-100"}>
          Password
          <input name="" type="password" required />
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
