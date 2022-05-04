const styleSwitcherToggler = document.querySelector(".style-switcher-toggler")
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

const mainContent = document.querySelector(".main-content")
mainContent.addEventListener("click" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const mainContainer = document.querySelector(".main-container")
mainContainer.addEventListener("click" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color)
{
    localStorage.setItem("color", color);
    changeColor();
}