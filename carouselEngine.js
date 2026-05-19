import { splitContent } from "./utils/splitContent";

export function generateCarousel(inputText, template) {
  const slides = splitContent(inputText);

  return slides.map((content, index) => ({
    id: crypto.randomUUID(),
    index,
    title: index === 0 ? "HOOK" : `Slide ${index}`,
    content,
    template: template || "modern",
  }));
}
