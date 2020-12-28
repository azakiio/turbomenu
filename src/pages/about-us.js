import React, { useLayoutEffect, useState } from "react"
import Meta from "../components/meta"
import { Link } from "gatsby"
import Fawzi from "../assets/fawzi.png"
import Adham from "../assets/adham.jpg"
import { FaLinkedin, FaEnvelope, FaRegIdCard} from "react-icons/fa"


export default function Privacy() {
  const block = "about-us"

  return (
    <div className={block}>
      <Meta
        title='TurboMenu — About Us'
        description='TurboMenu is a free tool that allows you to create a mobile-friendly QR code menu for your restaurant during COVID-19.'
      />
      <h1>About us</h1>
      <div className={`${block}__section`}>
        <h2>Who are we?</h2>
        <div className={`${block}__divider`}></div>
        <p>
          We’re just two guys who love using our skills to make something useful
          for others. We both graduated from the University of Toronto's
          Industrial Engineering program in June 2020 and have been friends
          since our first week of university in 2015.
        </p>

        <div className={`${block}__us`}>

          <div className={`${block}__person`}>
            <img className={`${block}__image`} src={Fawzi} alt='' />
            <h3>Fawzi Ammache</h3>
            <div className={`${block}__icons`} >
              <a alt="Linkedin" href="https://www.linkedin.com/in/fawzi-ammache"><FaLinkedin/></a>
              <a alt="Email" href="mailto:fawziammache@gmail.com"><FaEnvelope/></a>
              <a alt="Website" href="https://www.fawziammache.com"><FaRegIdCard/></a>
            </div>
          </div>

          <div className={`${block}__person`}>
            <img className={`${block}__image`} src={Adham} alt='' />
            <h3>Adham Zaki</h3>
            <div className={`${block}__icons`} >
              <a alt="Linkedin" href="https://www.linkedin.com/fawzi-ammache"><FaLinkedin/></a>
              <a alt="Email" href="mailto:azakica@gmail.com"><FaEnvelope/></a>
              <a alt="Website" href="https://www.azaki.ca"><FaRegIdCard/></a>
            </div>
          </div>

        </div>
        
      </div>

      <div className={`${block}__section`}>
        <h2>What's TurboMenu?</h2>
        <div className={`${block}__divider`}></div>
        <p>
          TurboMenu is an initiative aimed at helping small and local
          restaurants during the COVID-19 pandemic. To reduce contact between
          employees and customers, many restaurants have been switching to
          contactless menus that customers can access through a QR code.
        </p>
        <p>
          We realized that it would be helpful to create an easy tool that small
          restaurants can use to create a contactless menu without worrying
          about all the technical aspects. TurboMenu is a free service and not a
          company/business.
        </p>
      </div>

      <div className={`${block}__section`}>
        <h2>What's our goal?</h2>
        <div className={`${block}__divider`}></div>
        <p>
          We would like to help 10,000 restaurants create contactless menus, no
          matter where they are in the world. We realize that contactless menus
          are by no means a complete solution to the pandemic, but they’re a
          step in the right direction to reduce contact between customers and
          employees in small indoor spaces.
        </p>
      </div>

      <div className={`${block}__section`}>
        <h2>How does TurboMenu make money?</h2>
        <div className={`${block}__divider`}></div>
        <p>
          TurboMenu doesn't make money and we don't plan on monetizing it. It's
          a passion project and it's our way of offering help to the small
          businesses that have been struggling this year. Running and
          maintaining TurboMenu has very minimal costs that we cover ourselves.
        </p>
      </div>
    </div>
  )
}
