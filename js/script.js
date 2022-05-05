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

const nav = document.querySelector(".nav"), 
navList = nav.querySelectorAll("li"),
totalNavlist = navList.length 
allSelection = document.querySelectorAll(".section"),
totalSelection = allSelection.length

for (let i = 0; i < totalNavlist; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click", function() {
        /* for (let i = 0; i < totalSelection; i++){
            allSelection[i].classList.remove("back-section")
        } */
        removeBackSection()
        for (let j = 0; j < totalNavlist; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j)
                //allSelection[j].classList.add("back-section")
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

function removeBackSection() {
    for (let i = 0; i < totalSelection; i++){
        allSelection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSelection[num].classList.add("back-section")
}

function showSelection(element){
    for (let i = 0; i < totalSelection; i++){
        allSelection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element){
    for(let i = 0; i < totalNavlist; i++){
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index")
    showSelection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside")

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


function sendEmail() {
    Email.send({
        SecureToken : "3a6a4cb2-040a-485d-ae1a-861c7534aeef",
        To : 'sucharith.dasun@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value,
        /* Host : "smtp.elasticemail.com",
        Username : "sucharith.dasun@gmail.com",
        Password : "575D1357C094C18C8CD2B756F91C81EE5D9C",
        To : 'sucharith.dasun@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value */
    }).then(
      message => alert(message)
    )
}