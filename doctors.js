// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Open & Close Mobile Menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a navigation link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Close menu when screen size becomes desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }
});
