export function createCarousel(inputText) {
  const slides = splitIntoSlides(inputText);

  return slides.map((text, i) => ({
    id: crypto.randomUUID(),
    index: i,
    type: i === 0 ? "hook" : i === slides.length - 1 ? "cta" : "value",
    content: text.trim()
  }));
}

function splitIntoSlides(text) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  const result = [];
  let buffer = "";

  for (let s of sentences) {
    if ((buffer + s).length > 250) {
      result.push(buffer);
      buffer = s;
    } else {
      buffer += " " + s;
    }
  }

  if (buffer) result.push(buffer);

  return result;
}
