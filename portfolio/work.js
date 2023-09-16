const workBtnContainer = document.querySelector(".work__categories");
const projectCOntainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

// clilck work //
workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // remove selection //
  const active = document.querySelector(".category__btn.seleted");
  active.classList.remove("seleted");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("seleted");

  // project remove //
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});
