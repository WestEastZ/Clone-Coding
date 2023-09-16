"use strict";

const homeContainer = document.querySelector(".home__container");
const homeContainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
});
