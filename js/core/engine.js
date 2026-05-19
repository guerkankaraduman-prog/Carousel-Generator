import { parseText } from "./parser.js";
import { validateSlides } from "./validator.js";

export function buildCarousel(inputText, template = "default") {
  const rawSlides = parseText(inputText);

  const slides = rawSlides.map((text, index, arr) => ({
    id: crypto.randomUUID(),
    type: getType(index, arr.length),
    content: text.trim(),
    meta: {
      index,
      length: text.length
    }
  }));

  const validSlides = validateSlides(slides);

  return {
    id: crypto.randomUUID(),
    template,
    slides: validSlides
  };
}

function getType(index, total) {
  if (index === 0) return "hook";
  if (index === total - 1) return "cta";
  return "value";
}
