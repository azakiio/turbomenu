import React, { useEffect } from "react"
import Meta from "../components/meta"
import Logo from "../assets/logo.svg"
import Hero from "../assets/hero.png"
import Fast from "../assets/fast.svg"
import Money from "../assets/money.svg"
import Safe from "../assets/safe.svg"
import TMvsPDF from "../assets/TMvsPDF.png"
import Personalized from "../assets/personalized.png"
import BMC from "../assets/BMC.svg"
import Builder from "../assets/builder.png"
import { Link } from "gatsby"

export default function Home() {
  const block = "home"

  useEffect(() => {
    const tidio = document.getElementById("tidio-chat")
    if (tidio) {
      tidio.style.display = null
    }
  }, [])

  return (
    <div className={block}>
      <Meta
        title='TurboMenu — Free QR code menu for your restaurant'
        description='TurboMenu is a free tool that allows you to create a mobile-friendly QR code menu for your restaurant during COVID-19.'
      />
      <header className={`${block}__header`}>
        <div className={`${block}__header-logo`}>
          <img src={Logo} alt='TurboMenu Logo'></img>
        </div>

        <div className={`${block}__header-links`}>
          <Link className={`${block}__header-login`} to='/login'>
            Log in
          </Link>
          <Link className={`${block}__header-signup`} to='/signup'>
            Sign up
          </Link>
        </div>
      </header>

      <section>
        <div className={`${block}__hero`}>
          <div className={`${block}__hero-content`}>
            <h1>Create a safer dining experience with a QR code menu</h1>
            <p>Easily create and manage a QR code menu for your restaurant</p>
            <div className={`${block}__hero-links`}>
              <Link className={`${block}__hero-link`} to='/signup'>
                Create your free menu
              </Link>
              <Link className={`${block}__hero-secondary`} to='/demo'>
                See a demo
              </Link>
            </div>
          </div>

          <img className={`${block}__hero-img`} src={Hero} alt='' />
        </div>

        <div className={`${block}__3-col`}>
          <h1>Why a QR code menu?</h1>

          <div className={`${block}__3-col-section`}>
            <div className={`${block}__3-col-section-item`}>
              <img src={Safe} alt='' />
              <div className={`${block}__3-col-section-content`}>
                <h2>Cleaner</h2>
                <p>
                  Paper menus contain 100 times more germs than toilet seats
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Fast} alt='' />
              <div className={`${block}__3-col-section-content`}>
                <h2>Faster</h2>
                <p>
                  Customers don’t need to wait for a menu, they can access it
                  anytime
                </p>
              </div>
            </div>

            <div className={`${block}__3-col-section-item`}>
              <img src={Money} alt='' />
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
            <img src={TMvsPDF} alt='' />
          </div>
        </div>

        <div className={`${block}__2-col reverse`}>
          <div className={`${block}__2-col-img`}>
            <img src={Builder} alt='' />
          </div>
          <div className={`${block}__2-col-content`}>
            <h1>Hassle-free management</h1>
            <p>
              TurboMenu manages all the hosting and technical aspects involved
              in having a contactless menu.
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
            <img src={Personalized} alt='' />
          </div>
        </div>

        <footer className={`${block}__contact`}>
          <p>
            Made with{" "}
            <span role='img' aria-label='heart'>
              ❤️
            </span>{" "}
            in Toronto
          </p>
          <p>
            Questions? Reach out:{" "}
            <a href='mailto:hello@turbo.menu'>hello@turbo.menu</a>
          </p>
          <p>
            TurboMenu is 100% free and{" "}
            <a href='https://github.com/azakiio/turbomenu'>open-source</a>,
            consider supporting us.
          </p>
          <a
            href='https://www.buymeacoffee.com/turbomenu'
            target='_blank'
            rel='noreferrer'
          >
            <img className={`${block}__bmc`} src={BMC} alt='Buy Me A Coffee' />
          </a>
        </footer>
      </section>
    </div>
  )
}
