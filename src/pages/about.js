import React from "react"
import Meta from "../components/meta"
import Fawzi from "../assets/fawzi.png"
import Adham from "../assets/adham.jpg"
import { FaLinkedin, FaEnvelope, FaRegIdCard, FaGithub } from "react-icons/fa"
import GlobalHeader from "../components/globalHeader"
import GlobalFooter from "../components/globalFooter"

export default function About() {
  const block = "about"

  return (
    <div>
      <GlobalHeader />
      <div className={block}>
        <Meta
          title='TurboMenu — About us'
          description='TurboMenu is a free tool that allows you to create a mobile-friendly QR code menu for your restaurant during COVID-19.'
        />
        <h1>About us</h1>
        <div className={`${block}__section`}>
          <h2>Who are we?</h2>
          <div className={`${block}__divider`}></div>
          <p>
            We’re just two guys who love using our skills to create products
            that are useful and valuable to others. We both graduated from the
            University of Toronto's Industrial Engineering program in June 2020
            and have been friends ever since our first week of undergrad.
          </p>

          <div className={`${block}__us`}>
            <div className={`${block}__person`}>
              <img className={`${block}__image`} src={Fawzi} alt='Fawzi' />
              <h3>Fawzi Ammache</h3>
              <div className={`${block}__icons`}>
                <a
                  alt='Linkedin'
                  href='https://www.linkedin.com/in/fawzi-ammache'
                >
                  <FaLinkedin />
                </a>
                <a alt='Email' href='mailto:fawziammache@gmail.com'>
                  <FaEnvelope />
                </a>
                <a alt='Website' href='https://www.fawziammache.com'>
                  <FaRegIdCard />
                </a>
              </div>
            </div>

            <div className={`${block}__person`}>
              <img className={`${block}__image`} src={Adham} alt='Adham' />
              <h3>Adham Zaki</h3>
              <div className={`${block}__icons`}>
                <a alt='Linkedin' href='https://www.linkedin.com/in/adhamzaki'>
                  <FaLinkedin />
                </a>
                <a alt='Email' href='mailto:azakica@gmail.com'>
                  <FaEnvelope />
                </a>
                <a alt='Website' href='https://www.azaki.ca'>
                  <FaRegIdCard />
                </a>
                <a alt='Github' href='https://www.github.com/azakiio'>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${block}__section`}>
          <h2>What is TurboMenu?</h2>
          <div className={`${block}__divider`}></div>
          <p>
            TurboMenu is an initiative aimed at helping small and local
            restaurants during the COVID-19 pandemic. To reduce contact between
            employees and customers, many restaurants have been switching to
            contactless menus that customers can access through a QR code. We
            realized that it would be helpful to build a tool that made it easy
            for anyone to create a contactless menu for their restaurants. 
            <br/><br/>
            TurboMenu is a free service and not a company/business.
          </p>
        </div>

        <div className={`${block}__section`}>
          <h2>Why is it free?</h2>
          <div className={`${block}__divider`}></div>
          <p>
            There are many services that are similar to TurboMenu but they all
            charge a fee. Since restaurants have struggled financially this
            year, owners shouldn’t need an additional expense to worry about. By
            making TurboMenu free, we're also encouraging business owners to
            switch to a contactless menu to create a safer dining experience for
            everyone.
          </p>
        </div>

        <div className={`${block}__section`}>
          <h2>What's our goal?</h2>
          <div className={`${block}__divider`}></div>
          <p>
            We would like to help 10,000 restaurants create contactless menus,
            no matter where they are in the world. We realize that contactless
            menus are by no means a complete solution to the pandemic, but
            they’re a step in the right direction to reduce contact between
            customers and employees in indoor spaces.
          </p>
        </div>

        <div className={`${block}__section`}>
          <h2>How does TurboMenu make money?</h2>
          <div className={`${block}__divider`}></div>
          <p>
            TurboMenu doesn't make money and we don't have plans to monetize it.
            It's our way of contributing and offering help to the small
            businesses that have been struggling this year. Managing and
            maintaining TurboMenu requires minimal costs that we cover
            ourselves.
          </p>
        </div>
      </div>
      <GlobalFooter />
    </div>
  )
}
