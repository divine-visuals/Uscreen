window.addEventListener("load", function () {
    lucide.createIcons();
});
//    All navigation link
const productLink = document.getElementById("ProductLink");
const usecasesLink = document.getElementById("usecasesLink");
const switchLink = document.getElementById("switchLink");
const learnLink = document.getElementById("learnLink");
const pricingLink = document.getElementById("pricingLink");

// ===========menu===========
const productMenu = document.getElementById("productmenu");
const usecasesMenu = document.getElementById("usecasesmenu");
const switchMenu = document.getElementById("switchmenu");
const learnMenu = document.getElementById("learnmenu");
const pricingMenu = document.getElementById("pricingmenu");


// ===============listen-event===========
productLink.addEventListener("click", function(event) {
    event.preventDefault();

    productMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (
        !productLink.contains(event.target) &&
        !productMenu.contains(event.target)
    ) {
        productMenu.classList.remove("active");
    }
});


// ======usecases============

usecasesLink.addEventListener("click", function(event) {
    event.preventDefault();

    usecasesMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (
        !usecasesLink.contains(event.target) &&
        !productMenu.contains(event.target)
    ) {
        usecasesMenu.classList.remove("active");
    }
});

// ========Switch to Uscreen========
switchLink.addEventListener("click", function(event) {
    event.preventDefault();

    switchMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (
        !switchLink.contains(event.target) &&
        !switchMenu.contains(event.target)
    ) {
        switchMenu.classList.remove("active");
    }
});


    // =========Learn========
learnLink.addEventListener("click", function(event) {
    event.preventDefault();

    learnMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (
        !learnLink.contains(event.target) &&
        !learnMenu.contains(event.target)
    ) {
        learnMenu.classList.remove("active");
    }
});



// articles input====================
const articlesearch = document.getElementById("articlesearch");
const clearsearch = document.getElementById("clearsearch");

clearsearch.addEventListener("click", function()
    {articlesearch.value = ""; articlesearch.focus();})


    //===================== HAMBURGER=======================================
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click", function () {
    navlinks.classList.toggle("active");

 const icon = hamburger.querySelector("i");

    if (navlinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

        hamburger.setAttribute("aria-label", "Close navigation menu");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        hamburger.setAttribute("aria-label", "Open navigation menu");
    }
});

//======== NAVLINKS==================
navlinks.querySelectorAll("a").forEach(function(link) {
link.addEventListener("click", function() {
navlinks.classList.remove("active");

    const icon = hamburger.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

    hamburger.setAttribute("aria-label", "Open navigation menu");
});

});