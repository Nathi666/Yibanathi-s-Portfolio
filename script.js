// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all section titles (h2)
  const sections = document.querySelectorAll("section h2");

  // Fade in each section title one after another
  sections.forEach((h2, index) => {
    h2.style.opacity = 0; // start invisible
    h2.style.transition = "opacity 1.5s ease";

    // Delay the fade in based on section index
    setTimeout(() => {
      h2.style.opacity = 1; // fade in
    }, index * 500); // 0ms, 500ms, 1000ms...
  });
});
