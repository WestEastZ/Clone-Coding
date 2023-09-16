"use strict";

const upHomeContainer = document.querySelector(".home__container");
const upHomeContainerHeight = upHomeContainer.getBoundingClientRect().height;
const upArrow = document.querySelector(".up__arrow");

// disappear //
document.addEventListener("scroll", () => {
  // upArrow.style.opacity = 1 - upHomeContainerHeight / window.scrollY;
  // if (window.scrollY > upHomeContainerHeight) {
  //   upArrow.classList.remove("hidden");
  // } else {
  //   upArrow.classList.add("hidden");
  // }
  if (window.scrollY > upHomeContainerHeight / 2) {
    upArrow.classList.add("visible");
  } else {
    upArrow.classList.remove("visible");
  }
});

// tap Arrow //
function scrollIntoView(selection) {
  const scrollTO = document.querySelector(selection);
  scrollTO.scrollIntoView({ behavior: "smooth" });
}

upArrow.addEventListener("click", () => {
  scrollIntoView("#home");
});
