import { createCarousel } from "./engine.js";
import { renderSlides } from "./editor.js";

document.getElementById("generate").addEventListener("click", () => {
  const input = document.getElementById("input").value;

  if (!input.trim()) return;

  const slides = createCarousel(input);
  renderSlides(slides);
});
