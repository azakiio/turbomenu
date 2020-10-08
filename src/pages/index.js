import React from "react"
import Home from "../components/home"
import Builder from "../components/builder"
import Menu from "../components/menu"
import Login from "../components/login"
import { Router } from "@reach/router"

export default function Index() {
  return (
    <Router>
      <Home path="/"/>
      <Builder path='/builder' />
      <Login path='/login' />
      <Menu path='/:id' />
    </Router>
    
  )
}
