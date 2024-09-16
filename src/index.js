import homePage from "./homePage"
import nav from "./navBar"

const navContainer = document.querySelector("#nav-bar")
const contentContainer = document.querySelector("#content")

navContainer.addEventListener("click", (e) => {
    if (e.target.id === "home") {
        contentContainer.innerHTML = ''
        contentContainer.appendChild(homePage.render())
    } else if (e.target.id === "menu") {
        contentContainer.innerHTML = ''
        contentContainer.innerHTML = "displaying menu"
    } else if (e.target.id === "contact") {
        contentContainer.innerHTML = ''
        contentContainer.innerHTML = "displaying contact"
    }
})

navContainer.appendChild(nav.render())
contentContainer.appendChild(homePage.render())

