import { useEffect } from "react"

export default function useTidio(isShow = true) {
  useEffect(() => {
    let observer = new MutationObserver(() => {
      const tidio = document.getElementById("tidio-chat-iframe")
      if (tidio) {
        if (isShow) {
          tidio.style.visibility = null
        } else {
          tidio.style.visibility = "hidden"
        }
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }, [isShow])

  return null
}
