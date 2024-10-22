const hamburger = document.querySelector(".hamburger");
const closeSideBar = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");
const navLinksMobile = document.querySelector(".nav-links-mobile");

hamburger.addEventListener("click", () => {
  navLinksMobile.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

closeSideBar.addEventListener("click", () => {
  hamburger.classList.remove("hide");
  hamburger.classList.add("show");
  navLinksMobile.classList.toggle("show");
});
