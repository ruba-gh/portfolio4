const projectPages = document.querySelectorAll(".project-page");
const mainSections = document.querySelectorAll(".hero, .overview-section, #projects, #skills, #about");

function handleRoute() {
  const hash = window.location.hash.replace("#", "");

  projectPages.forEach(page => page.classList.remove("active"));
  mainSections.forEach(section => section.classList.remove("hidden"));

  const selectedProject = document.getElementById(hash);

  if (selectedProject && selectedProject.classList.contains("project-page")) {
    mainSections.forEach(section => section.classList.add("hidden"));
    selectedProject.classList.add("active");
    window.scrollTo(0, 0);
  }
}

document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-image");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let index = 0;

  function showImage(newIndex) {
    images[index].classList.remove("active");
    index = (newIndex + images.length) % images.length;
    images[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => showImage(index - 1));
  nextBtn.addEventListener("click", () => showImage(index + 1));
});

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});