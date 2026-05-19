export function splitContent(text, maxChars = 280) {
  const sentences = text.split(". ");
  const slides = [];
  let current = "";

  for (let sentence of sentences) {
    if ((current + sentence).length > maxChars) {
      slides.push(current.trim());
      current = sentence;
    } else {
      current += sentence + ". ";
    }
  }

  if (current) slides.push(current.trim());

  return slides;
}
