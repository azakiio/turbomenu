import React from "react"
import Meta from "../components/meta"
import Logo from "../assets/logo.svg"
import Hero from "../assets/hero.png"
import Fast from "../assets/fast.svg"
import Money from "../assets/money.svg"
import Safe from "../assets/safe.svg"
import TMvsPDF from "../assets/TMvsPDF.png"
import Personalized from "../assets/personalized.png"
import Builder from "../assets/builder.png"

export default function Home() {
  const block = "home"

  return (
    <div className={block}>
      <Meta title='TurboMenu — Contactless menus for your restaurant' />
      <header className={`${block}__header`}>
        <div className={`${block}__header-logo`}>
          <img src={Logo} alt="TurboMenu Logo"></img>
        </div>

        <div>
          <a className={`${block}__header-login`} href="/login">
            Log in
          </a>
          <a className={`${block}__header-signup`} href="/signup">
            Sign up
          </a>
        </div>
      </header>

      <section>
        <div className={`${block}__hero`}>
          <div className={`${block}__hero-content`}>
            <h1>Create a safer dining experience with a contactless menu</h1>
            <p>
              Easily create and manage a contactless menu for your restaurant
            </p>
            <a class="" href="/signup">
              Create your free menu
            </a>
          </div>

          <img className={`${block}__hero-img`} src={Hero} alt="" />
        </div>

        <div className={`${block}__3-col`}>
          <h1>Why a contactless menu?</h1>

          <div className={`${block}__3-col-section`}>
            <div className={`${block}__3-col-section-item`}>
              <img src={Safe} alt="" />
              <div className={`${block}__3-col-section-content`}>
                <h2>Cleaner</h2>
                <p>
                  Paper menus contain 100 times more germs than toilet seats
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Fast} alt="" />
              <div className={`${block}__3-col-section-content`}>
                <h2>Faster</h2>
                <p>
                  Customers don’t need to wait for a menu, they can access it
                  anytime
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Money} alt="" />
              <div className={`${block}__3-col-section-content`}>
                <h2>Cheaper</h2>
                <p>
                  Don’t worry about printing new menus, simply update it anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Mobile-friendly menus</h1>
            <p>
              PDF menus are hard to read on a phone. With TurboMenu, your
              customers get a mobile-friendly version that loads fast.
            </p>
          </div>
          <div className={`${block}__2-col-img`}>
            <img src={TMvsPDF} alt="" />
          </div>
        </div>

        <div className={`${block}__2-col reverse`}>
          <div className={`${block}__2-col-img`}>
            <img src={Builder} alt="" />
          </div>
          <div className={`${block}__2-col-content`}>
            <h1>Hassle-free management</h1>
            <p>
              TurboMenu manages all the hosting and technical aspects involved
              of having a contactless menu.
            </p>
          </div>
        </div>

        <div className={`${block}__2-col`}>
          <div className={`${block}__2-col-content`}>
            <h1>Personalized for you</h1>
            <p>
              Create your unique and easy-to-remember link. More customization
              features coming soon!
            </p>
          </div>
          <div className={`${block}__2-col-img`}>
            <img src={Personalized} alt="" />
          </div>
        </div>

        <div className={`${block}__contact`}>
          <h1>Questions?</h1>
          <p>
            Email us at <a href="mailto:hello@turbo.menu">hello@turbo.menu</a>
          </p>
        </div>


      </section>

      <footer className={`${block}__footer`}>
        <p>
          Made with ♥ in Toronto, Canada
        </p>
        <div className={`${block}__footer-support`}>
          <p>
              TurboMenu is 100% free and <a href="">open-source</a>. You can support us by clicking below.
          </p>
          <a href="https://www.buymeacoffee.com/turbomenu" target="_blank">
              <img className={`${block}__buymeacoffee`}
                src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                alt="Buy Me A Coffee"
              />
            </a>
        </div>
      </footer>

    </div>
  )
}
