import React from "react"
import Menu from '../components/menu'
import { useLocation } from "@reach/router"

export default function MenuPage() {
  const pathname = useLocation().pathname.substring(1)
  
  return <Menu id={pathname} />
}
