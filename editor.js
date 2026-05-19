export function renderSlides(slides) {
  const container = document.getElementById("carousel");

  container.innerHTML = "";

  slides.forEach(slide => {
    const el = document.createElement("div");
    el.className = `slide slide-${slide.type}`;

    el.innerHTML = `
      <div class="slide-content">
        ${slide.content}
      </div>
    `;

    container.appendChild(el);
  });
}
