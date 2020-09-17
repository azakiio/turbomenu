import React from "react";
import Logo from "./Logo.svg";
import Hero from "../assets/hero.png";
import {useTitle, navigate} from "hookrouter";
import Fast from "../assets/fast.svg";
import Money from "../assets/money.svg";
import Safe from "../assets/safe.svg";
import TMvsPDF from "../assets/TMvsPDF.png";
import Personalized from "../assets/personalized.png";
import Builder from "../assets/builder.png";



function Home() {
  useTitle('TurboMenu — Contactless menus for your restaurant');
  const block = "home";

  return (
    <div className={block}>
      <header className={`${block}__header`}>
        <div className={`${block}__header-logo`}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </div>

      <div>
        <button className={`${block}__header-login`}>Log in</button>
        <button className={`${block}__header-signup`}>Sign up</button>
      </div>

      </header>

      <body>
        <div className={`${block}__hero`}>
          <div className={`${block}__hero-content`}>
            <h1>Create a safer dining experience with a contactless menu</h1>
            <p>Easily create and manage a contactless menu for your restaurant</p>
            <button href="" >Create your free menu</button>
          </div>

          <img className={`${block}__hero-img`} src={Hero} alt="" />
        </div>

        <div className={`${block}__3-col`}>
          <h1>Why a contactless menu?</h1>

          <div className={`${block}__3-col-section`}>
              <div className={`${block}__3-col-section-item`}>
                <img src={Safe} alt=""/>
                <div className={`${block}__3-col-section-content`}>
                  <h2>Cleaner</h2>
                  <p>Paper menus contain 100 times more germs than toilet seats</p>
                </div>
              </div>

              <div className={`${block}__3-col-section-item`}>
                <img src={Fast} alt=""/>
                <div className={`${block}__3-col-section-content`}>
                  <h2>Faster</h2>
                  <p>Customers don’t need to wait for a menu, they can access it anytime</p>
                </div>
              </div>

              <div className={`${block}__3-col-section-item`}>
                <img src={Money} alt=""/>
                <div className={`${block}__3-col-section-content`}>
                  <h2>Cheaper</h2>
                  <p>Don’t worry about printing new menus, simply update it anytime</p>
                </div>
              </div>
          </div>
        </div>

        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Mobile-friendly menus</h1>
            <p>
            PDF menus are hard to read on a phone. With TurboMenu, your customers get a mobile-friendly version that loads fast.
            </p>
          </div>
          <div className={`${block}__2-col-img`}>
            <img src={TMvsPDF} alt=""/>
          </div>
        </div>

        <div className={`${block}__2-col reverse`}>
          <div className={`${block}__2-col-img`}>
            <img src={Builder} alt=""/>
          </div>
          <div className={`${block}__2-col-content`}>
            <h1>Hassle-free management</h1>
            <p>
            TurboMenu manages all the hosting and technical aspects involved of having a contactless menu.
            </p>
          </div>
        </div>


        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Personalized for you</h1>
            <p>
            Create your unique and easy-to-remember link. More customization features coming soon!
            </p>
          </div>
          <div className={`${block}__2-col-img`}>
            <img src={Personalized} alt=""/>
          </div>
        </div>

        <div className={`${block}__contact`}>
          <h1>Questions?</h1>
          <p>Email us at <a href="mailto:hello@turbo.menu">hello@turbo.menu</a></p>
          <button href="" >Create your free menu</button>
        </div>
        
      </body>

      <footer className={`${block}__footer`}>
        <div>
          <p>
            Made in Toronto, Canada ♥
            <br/>
            © TurboMenu. All Rights Reserved.</p>
        </div>

        <div className={`${block}__footer-contact`}>
          <p>
             <a href="mailto:hello@turbo.menu">hello@turbo.menu</a>
            <br/>
             <a href="tel:6479708575">(647) 970-8575</a>
          </p>
        </div>

      </footer>

    </div>
  );
}

export default Home;
