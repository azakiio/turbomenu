import React, { useLayoutEffect, useState } from "react"
import Meta from "../components/meta"
import { Link } from "gatsby"
import Logo from "../assets/logo.svg"

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
    </div>
  )
}
