"use strict";




let showProfile = document.querySelector(".profile-info-container");
let showProfileInfo = () => {
    if(showProfile.style.display == "block") showProfile.style.display = "none"
    else showProfile.style.display = "block"
}

document.querySelector("body").addEventListener("click", () => {
    showProfileInfo.style.display = "none !important"
})

let backuser = document.querySelector(".back-user");
backuser.style.display = "none"
let toggleOffcanvas = document.querySelector(".toggleOffcanvas");
let offcanvasToggler = document.querySelector(".offcanvas-toggler");
let showMobileProfile = document.querySelector(".mobile-profile-info-container")
let showMobileProfileInfo = () => {
    if(showMobileProfile.style.display == "block") {
        showMobileProfile.style.display = "none"
        offcanvasToggler.style.display = "block"
        backuser.style.display = "none"
        toggleOffcanvas.style.display = "block"
    }else {
        showMobileProfile.style.display = "block"
        offcanvasToggler.style.display = "none"
        backuser.style.display = "block"
        toggleOffcanvas.style.display = "none"
    }
}
let backOffcanvas = () => {
    if(showMobileProfile.style.display == "block") {
        showMobileProfile.style.display = "none"
        offcanvasToggler.style.display = "block"
        backuser.style.display = "none"
        toggleOffcanvas.style.display = "block"
    }else {
        showMobileProfile.style.display = "block"
        offcanvasToggler.style.display = "none"
        backuser.style.display = "block"
        toggleOffcanvas.style.display = "none"
    }
}
