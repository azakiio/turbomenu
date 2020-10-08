import "./src/styles/style.scss"

import "firebase/auth"
import "firebase/database"
import "firebase/analytics"

// Add outlines if keyboard navigator
const root = document.getElementById("___gatsby")
root.classList.add("hide-focus-outlines")

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    root.classList.remove("hide-focus-outlines")
  }
})

document.addEventListener("click", function (e) {
  root.classList.add("hide-focus-outlines")
})
