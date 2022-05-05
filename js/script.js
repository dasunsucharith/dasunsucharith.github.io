var typed = new Typed(".typing", {
    strings: ["","Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-about", {
    strings: ["","Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"), navList = nav.querySelectorAll("li"),
totalNavlist = navList.length 
allSelection = document.querySelectorAll(".section"),
totalSelection = allSelection.length

for (let i = 0; i < totalNavlist; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click", function() {
        for (let i = 0; i < totalSelection; i++){
            allSelection[i].classList.remove("back-section")
        }
        for (let j = 0; j < totalNavlist; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSelection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }

        this.classList.add("active")
        showSelection(this)

        if (window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    })
}

function showSelection(element){
    for (let i = 0; i < totalSelection; i++){
        allSelection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside"),
    mainContent = document.querySelector(".main-content")
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn()
        mainContentTogglerBtn()
    })
    function asideSectionTogglerBtn() {
        aside.classList.toggle("open")
        navTogglerBtn.classList.toggle("open")
        for (let i = 0; i < totalSelection; i++){
            allSelection[i].classList.toggle("open")
        }
    }
    /* function mainContentTogglerBtn() {
        if(aside.classList.contains("open"))
        {
            aside.classList.remove("open")
        }
    } */
