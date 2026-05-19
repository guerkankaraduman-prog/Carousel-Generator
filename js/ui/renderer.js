export function renderCarousel(carousel) {
  const container = document.getElementById("carousel");

  container.innerHTML = "";

  carousel.slides.forEach(slide => {
    const el = document.createElement("div");

    el.className = `slide ${slide.type}`;

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = slide.content;

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = slide.type;

    el.appendChild(badge);
    el.appendChild(text);

    container.appendChild(el);
  });
}
