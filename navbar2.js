document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const dropdowns = document.querySelectorAll(".has-dropdown > a");

  // ✅ Toggle main menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // ✅ Mobile dropdowns toggle
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const subMenu = dropdown.nextElementSibling;
        subMenu.classList.toggle("show");
      }
    });
  });
});
