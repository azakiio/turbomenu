import React, { useLayoutEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import BuilderContent from "../components/builderContent"
import BuilderHeader from "../components/builderHeader"
import { navigate } from "gatsby"

export default function Builder() {
  const [TurboId, setTurboId] = useState(false)

  useLayoutEffect(() => {
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

  return TurboId ? (
    <>
      <BuilderHeader id={TurboId} />
      <BuilderContent id={TurboId} />
    </>
  ) : (
    <div>Loading</div>
  )
}
//TODO: Fix loading state
