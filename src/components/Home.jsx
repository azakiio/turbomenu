import React from "react";
import { navigate } from "hookrouter";
import Logo from "./Logo.svg";
import Hero from "../assets/hero.png";
import firebase from "../imports/firebase";

function Home() {
  const block = "home";

  return (
    <div className={block}>
      <header className={`${block}__header`}>
        <div className={`${block}__header-logo`}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </div>

        {/* <button className={`${block}__header-button`}>Log in</button> */}

      </header>

      <body>
        <div className={`${block}__hero`}>
          <div className={`${block}__hero-content`}>
            <h1>Create a safe dining experience with a contactless menu</h1>
            <p>Easily create and manage a contactless menu to minimize contact between your customers and employees.</p>
            <button>Get your free contactless menu</button>
          </div>

          <img className={`${block}__hero-img`} src={Hero} alt="" />
        </div>

        <div className={`${block}__value`}>
          <h1>Why a contactless menu?</h1>

          <div className={`${block}__value-section`}>
              <div className={`${block}__value-section-item`}>
                <h1>😷</h1>
                <div className={`${block}__value-section-content`}>
                  <h2>Cleaner than paper menus</h2>
                  <p>Paper menus are one of the germiest things in restaurants. 
                    Researchers found that they contain <span>over 100 times more germs than toilet seats</span>.
                    We're not experts, but that sounds pretty bad.</p>
                </div>
              </div>

              <div className={`${block}__value-section-item`}>
                <h1>⏳</h1>
                <div className={`${block}__value-section-content`}>
                  <h2>Faster for your customers and employees</h2>
                  <p>Your customers don’t have to wait for anyone to give them a menu, and your employees can focus on interacting with them and providing excellent service.</p>
                </div>
              </div>

              <div className={`${block}__value-section-item`}>
                <h1>💸</h1>
                <div className={`${block}__value-section-content`}>
                  <h2>Cheaper and more practical</h2>
                  <p>Contactless menus can be instantly updated with new menu items or specials. Don't worry about having to print new menus or hiring someone to make them for you.</p>
                </div>
              </div>
          </div>
        </div>



        <div className={`${block}__how`}>
          <h1>How it works</h1>
          <h2>Questions? Contact us at <a href="mailto:hello@turbo.menu">hello@turbo.menu</a></h2>

          <div className={`${block}__how-section`}>
            <div className={`${block}__how-section-item`}>
              <h1>1️⃣</h1>
              <h2>Send us your menu</h2>
              <p>
                Send your menu to <a href="">hello@turbo.menu</a>. 
                We'll use it to create a digital, mobile-friendly version of your menu.
              </p>
            </div>

            <div className={`${block}__how-section-item`}>
              <h1>2️⃣</h1>
              <h2>Receive your link and QR code</h2>
              <p>
                We'll get your menu up and running and create your very own TurboMenu link and QR code.
              </p>
            </div>

            <div className={`${block}__how-section-item`}>
              <h1>3️⃣</h1>
              <h2>Show it to customers!</h2>
              <p>
                Place your menu link and QR code on tables (or anywhere else you want!) for your customers to use.
              </p>
            </div>

          </div>

        </div>

        
      </body>

      <footer className={`${block}__footer`}>
        <div>
          <p>
            Made in Toronto, Canada ❤️
            <br/>
            © TurboMenu. All Rights Reserved.</p>
        </div>

        <div className={`${block}__footer-contact`}>
          <p>
            ✉️ <a href="mailto:hello@turbo.menu">hello@turbo.menu</a>
            <br/>
            📞 647-970-8575
          </p>
        </div>

      </footer>

    </div>
  );
}

export default Home;
