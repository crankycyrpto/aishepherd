const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });

  // Close mobile nav when a link is clicked
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
    });
  });
}
