// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
});

// Tooltip WhatsApp
const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", () => {
    whatsappBtn.classList.add("show-tooltip");
    setTimeout(() => whatsappBtn.classList.remove("show-tooltip"), 1500);
});