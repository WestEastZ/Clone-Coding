const navbarMenu = document.querySelector(".navbar__menu");
const homeContact = document.querySelector(".home__button");

// scrollIntoView function //
function scrollIntoView(selection) {
  const scrollTO = document.querySelector(selection);
  scrollTO.scrollIntoView({ behavior: "smooth" });
}

// nav scroll //
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);

  navbarMenu.classList.remove("open");
});

// home contact scroll //
homeContact.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});
