const navBarMenu = document.querySelector(".navbar__menu");
const navBarBtn = document.querySelector(".navbar__toggle-btn");

navBarBtn.addEventListener("click", () => {
  navBarMenu.classList.toggle("open");
});
