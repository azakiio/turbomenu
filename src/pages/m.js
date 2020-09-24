import React from "react"
import { Router } from "@reach/router"
import Menu from "../components/menu"

export default function M() {
  return (
    <Router >
      <Menu path="m/:id" />
      <Default path="m/"/>
    </Router>
  )
}
