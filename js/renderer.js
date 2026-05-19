export function renderCarousel(slides) {
  const container = document.getElementById("carousel");

  if (!container) return;

  container.innerHTML = "";

  slides.forEach(slide => {
    const card = document.createElement("div");
    card.className = `slide ${slide.type}`;

    const content = document.createElement("div");
    content.className = "slide-content";
    content.textContent = slide.content;

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = slide.type.toUpperCase();

    card.appendChild(badge);
    card.appendChild(content);

    container.appendChild(card);
  });
}
