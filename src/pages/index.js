import React from "react"
import Home from "../components/home"
import Builder from "../components/builder"
import Menu from "../components/menu"
import Login from "../components/login"
import Signup from "../components/signup"
import Error from "../components/error.js"
import { Router } from "@reach/router"

export default function Index() {
  return (
    <Router>
      <Home path="/"/>
      <Builder path='/builder' />
      <Login path='/login' />
      <Signup path='/signup' />
      <Menu path='/:id' />
      <Error path='/404'/>
    </Router>
    
  )
}
