document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");

  const images = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3"
  ];

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    carousel.appendChild(img);
  });
});
