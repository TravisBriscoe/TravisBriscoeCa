const navBarLinks = document.querySelector(".nav__external-show");
const navHomeLink = document.querySelector("#link__home");
const navAboutLink = document.querySelector("#link__about");
const welcomePage = document.querySelector(".welcome");
const aboutPage = document.querySelector(".about");

navBarLinks.addEventListener("click", function () {
    const links = document.querySelector("#nav__external-links");
    links.classList.toggle("invisi");
});

navAboutLink.addEventListener("click", function () {
    if (!welcomePage.classList.contains("hidden")) {
        welcomePage.classList.add("hidden");
    } else welcomePage.classList.remove("hidden");
    if (aboutPage.classList.contains("hidden")) {
        aboutPage.classList.remove("hidden");
    } else aboutPage.classList.add("hidden");
    if (!navAboutLink.classList.contains("hidden")) {
        navAboutLink.classList.add("hidden");
        navHomeLink.classList.remove("hidden");
    } else {
        navAboutLink.classList.remove("hidden");
        navHomeLink.classList.add("hidden");
    }
});
