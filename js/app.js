import { generateCarousel } from "./engine.js";
import { renderCarousel } from "./renderer.js";

const input = document.getElementById("input");
const btn = document.getElementById("generate");

btn.addEventListener("click", () => {
  const text = input.value;

  const slides = generateCarousel(text);

  renderCarousel(slides);
});
