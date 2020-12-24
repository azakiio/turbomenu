import React, { useEffect } from "react"
import Menu from "../components/menu"
import { useLocation } from "@reach/router"

export default function MenuPage() {
  const pathname = useLocation().pathname.substring(1)

  useEffect(() => {
    const tidio = document.getElementById("tidio-chat")
    if (tidio) {
      tidio.style.display = "none"
    }
  }, [])

  return <Menu id={pathname} />
}
