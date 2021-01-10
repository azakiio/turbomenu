import React from "react"
import Menu from "../components/menu"
import { useLocation } from "@reach/router"
import useTidio from "../hooks/useTidio"


export default function MenuPage() {
  const pathname = useLocation().pathname.substring(1)
  useTidio(false);

  return <Menu id={pathname} />
}
