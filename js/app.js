import { buildCarousel } from "./core/engine.js";
import { renderCarousel } from "./ui/renderer.js";

const input = document.getElementById("input");
const btn = document.getElementById("generate");

btn.addEventListener("click", () => {
  const text = input.value;

  const carousel = buildCarousel(text);

  renderCarousel(carousel);
});
