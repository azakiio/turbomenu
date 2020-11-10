import React from "react"
import { Helmet } from "react-helmet"

export default function Meta(props) {

  const {title, description} = props

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title}/>
    <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://turbo.menu/"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content="/assets/meta.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://turbo.menu/"/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content="/assets/meta.png"/>
    </Helmet>
  )
};

//TODO: Make this take in arguments and use variables