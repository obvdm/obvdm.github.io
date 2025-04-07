// JavaScript Document
const textOverlay = document.getElementById("textOverlay");
const sections = document.querySelectorAll(".image-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const text = entry.target.getAttribute("data-text");
        textOverlay.textContent = text;
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));
