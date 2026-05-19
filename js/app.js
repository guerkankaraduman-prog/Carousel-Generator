function splitText(text, maxLength = 240) {
  const sentences = text
    .replace(/\n/g, " ")
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];

  const result = [];
  let buffer = "";

  for (let s of sentences) {
    if ((buffer + " " + s).length > maxLength) {
      if (buffer) result.push(buffer);
      buffer = s;
    } else {
      buffer += " " + s;
    }
  }

  if (buffer) result.push(buffer);

  return result;
}

function generateSlides(text) {
  const chunks = splitText(text);

  return chunks.map((t, i) => {
    return {
      type: i === 0 ? "hook" : i === chunks.length - 1 ? "cta" : "value",
      content: t.trim()
    };
  });
}

function render(slides) {
  const container = document.getElementById("carousel");
  container.innerHTML = "";

  slides.forEach(s => {
    const div = document.createElement("div");
    div.className = "slide " + s.type;
    div.textContent = s.content;

    container.appendChild(div);
  });
}

function generate() {
  const input = document.getElementById("input").value;

  if (!input.trim()) {
    alert("Bitte Text eingeben!");
    return;
  }

  const slides = generateSlides(input);
  render(slides);
}
