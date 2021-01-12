import React from "react"
import Meta from "../components/meta"
import GlobalFooter from "../components/globalFooter"
import useTidio from "../hooks/useTidio"

export default function Privacy() {
  const block = "privacy"
  useTidio(false)

  return (
    <div>

    <div className={block}>
        <Meta title='TurboMenu — Privacy Policy' description='TurboMenu is a free tool that allows you to create a mobile-friendly QR code menu for your restaurant during COVID-19.' />
        <a href="/">Back to Homepage</a>

      <h1>Privacy Policy</h1>
      <p>Last updated: December 26, 2020</p>
      <h2>Introduction</h2>
      <p>
        At TurboMenu, we’re helping restaurants create free contactless menus to
        reduce the spread of COVID-19. In order to do so, TurboMenu collects the
        necessary information to serve our users and their customers
        effectively. This policy describes the information we process to support
        TurboMenu. This Privacy Policy will help you better understand how we
        collect use, and share your personal information. If any of our
        practices change, you will be directly informed by email.
      </p>


        <h1>Privacy Policy</h1>
        <p>Last updated: December 28, 2020</p>
        <h2>Introduction</h2>
        <p>
          At TurboMenu, we’re helping restaurants create free contactless menus
          to reduce the spread of COVID-19. In order to do so, TurboMenu
          collects the necessary information to serve our users and their
          customers effectively. This policy describes the information we
          process to support TurboMenu. This Privacy Policy will help you better
          understand how we collect use, and share your personal information. If
          any of our practices change, you will be directly informed by email.
        </p>

        <h2>What information we collect</h2>
        <p>
          To use TurboMenu, we collect the following information when users sign
          up to use our service:
          <ul>
            <li>Email Address</li>
            <li>Restaurant Name</li>
          </ul>
          We don’t collect any personal or sensitive information such as legal
          name, date of birth, or ID numbers.
        </p>

        <h2>How your information is used</h2>
        <p>The information collected is used for the following reasons:</p>
        <ol>
          <li>Accessing your TurboMenu account</li>
          <p>
            The email address you provide during signup is used to log in to
            your TurboMenu account. In case your password needs to be reset, a
            link will be sent to the email address provided. We may use your
            email address to contact you with important product updates and
            other information that may be of interest to you. You may opt out of
            receiving any, or all, of these communications from us by following
            the unsubscribe link.
          </p>

          <li>Providing your Restaurant’s menu to your customers</li>
          <p>
            When you create your account, you’ll be asked to fill out your
            contactless menu. We store all the information you provide,
            including: restaurant name, menu sections {"&"} menu items (names,
            descriptions, and prices). The menu information you provide is shown
            to whoever scans your menu’s QR code or visits your unique TurboMenu
            link (turbo.menu/your-restaurant). Your menu information can be
            updated or deleted at your own discretion. Any menu information that
            is deleted is completely erased from our database and cannot be
            recovered.
          </p>

          <li>Sending important product updates and other information</li>
          <p>
            To improve our service, we may contact you with newsletters,
            surveys, and other materials or information that may be of interest
            to you. You may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link.
          </p>
        </ol>
        <p>
          <strong>
            If you would like to delete your account and erase all data
            associated with it, please email us at{" "}
            <a href='mailto:hello@turbo.menu'>hello@turbo.menu</a>.
          </strong>
        </p>

        <h2>How we share your information</h2>
        <p>
          We only share your Restaurant’s Name and Menu with your customers when
          they visit your custom TurboMenu link or scan your QR code. Your email
          is only accessible to TurboMenu admins and is not shared or sold to
          any third parties.
        </p>
        <h2>Analytics</h2>
        <p>
          We may use third-party Service Providers to monitor and analyze the
          use of our Service.{" "}
        </p>
        <h3>Google Analytics</h3>
        <p>
          Google Analytics is a web analytics service offered by Google that
          tracks and reports website traffic. Google uses the data collected to
          track and monitor the use of our Service. This data is shared with
          other Google services. Google may use the collected data to
          contextualise and personalise the ads of its own advertising network.
          For more information on the privacy practices of Google, please visit
          the{" "}
          <a href='https://policies.google.com/privacy'>
            Google Privacy Policy
          </a>{" "}
          page. We also encourage you to review Google's policy for{" "}
          <a href='https://support.google.com/analytics/answer/6004245'>
            safeguarding your data.
          </a>
        </p>

        <h3>Firebase</h3>
        <p>
          Firebase is a database and analytics service provided by Google. For
          more information on what type of data Firebase collects and
          instructions for opting out of certain Firebase features, please visit
          the{" "}
          <a href='https://policies.google.com/privacy'>
            Google Privacy Policy
          </a>{" "}
          page.
        </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
        <ul>
            <li>By email: hello@turbo.menu.</li>
            <li>By visiting our website and contacting us through live chat: http://turbo.menu.</li>
        </ul>
      </p>
      </div>

    <GlobalFooter/>
    </div>
  )
}
