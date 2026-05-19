export function splitText(text, maxLength = 240) {
  const sentences = text
    .replace(/\n/g, " ")
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];

  const result = [];
  let buffer = "";

  for (const sentence of sentences) {
    const trimmed = sentence.trim();

    if ((buffer + " " + trimmed).length > maxLength) {
      if (buffer) result.push(buffer.trim());
      buffer = trimmed;
    } else {
      buffer += " " + trimmed;
    }
  }

  if (buffer.trim()) result.push(buffer.trim());

  return result;
}
