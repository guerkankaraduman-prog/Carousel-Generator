export function parseText(text, maxLength = 260) {
  const cleaned = text
    .replace(/\s+/g, " ")
    .trim();

  const sentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];

  const slides = [];
  let buffer = "";

  for (const sentence of sentences) {
    const s = sentence.trim();

    if ((buffer + " " + s).length > maxLength) {
      if (buffer) slides.push(buffer);
      buffer = s;
    } else {
      buffer += " " + s;
    }
  }

  if (buffer) slides.push(buffer);

  return slides;
}
