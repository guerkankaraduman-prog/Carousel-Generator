export function validateSlides(slides) {
  return slides
    .filter(s => s.content && s.content.length > 1)
    .map(s => ({
      ...s,
      content: sanitize(s.content)
    }));
}

function sanitize(text) {
  return text
    .replace(/</g, "")
    .replace(/>/g, "")
    .trim();
}
