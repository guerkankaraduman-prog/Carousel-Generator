import { splitText } from "./utils.js";

export function generateCarousel(inputText) {
  if (!inputText || !inputText.trim()) return [];

  const chunks = splitText(inputText, 240);

  return chunks.map((text, index) => {
    return {
      id: crypto.randomUUID(),
      index,
      type: getSlideType(index, chunks.length),
      content: text.trim()
    };
  });
}

function getSlideType(index, total) {
  if (index === 0) return "hook";
  if (index === total - 1) return "cta";
  return "value";
}
