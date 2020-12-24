import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import Logo from "../assets/logo.svg"
import BuilderContent from "../components/builderContent"
import BuilderHeader from "../components/builderHeader"
import { navigate } from "gatsby"

export default function Builder() {
  const [turboId, setTurboId] = useState(false)

  useEffect(() => {
    const tidio = document.getElementById("tidio-chat")
    if(tidio){
      tidio.style.display = null
    }
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userRef = firebase.database().ref(`users/${user.uid}`)
        userRef.once("value").then(function (snapshot) {
          setTurboId(snapshot.val())
        })
      } else {
        navigate("/login")
      }
    })
  }, [])

  return turboId ? (
    <>
      <BuilderHeader turboId={turboId} />
      <BuilderContent turboId={turboId} />
    </>
  ) : (
    <div className={"menu__loading"}>
      <img src={Logo} alt='TurboMenu Logo'></img>
      <p className={"menu__loading-text"}>Loading your delicious menu...</p>
    </div>
  )
}
