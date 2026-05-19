export function buildPrompt(input) {
  return `
You are a viral LinkedIn carousel generator.

Convert this text into:
- Hook slide
- Value slides
- CTA slide

Text:
${input}

Return structured JSON slides.
`;
}
