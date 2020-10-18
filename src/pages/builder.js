import React, { useLayoutEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import BuilderContent from "../components/builderContent"
import BuilderHeader from "../components/builderHeader"
import { navigate } from "gatsby"

export default function Builder() {
  useLayoutEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid)
      }
      if (!user) {
        navigate("/login")
      }
    })
  })

  return (
    <>
      <BuilderHeader id='demo' />
      <BuilderContent id='demo' />
    </>
  )
}
