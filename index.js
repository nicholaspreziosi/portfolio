// cache dom
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");
const navItems = document.querySelector("#nav-items");

function toggleMobileMenu() {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

function desktopMenu() {
  if (window.innerWidth > 600) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

//bind events
hamburger.addEventListener("click", () => {
  toggleMobileMenu();
});

window.addEventListener("resize", () => {
  desktopMenu();
});
