import React from "react"
import firebase from "gatsby-plugin-firebase"
import BuilderContent from "./builderContent"
import BuilderHeader from "./builderHeader"
import { navigate } from "gatsby"

export default function Builder() {
  firebase.auth().onAuthStateChanged(function (user) {
    if(user) {
      console.log(user.getIdToken())
    }
    if (!user) {
      navigate("/login")
    }
  })

  return (
    <>
      <BuilderHeader id="demo" />
      <BuilderContent id="demo" />
    </>
  )
}
