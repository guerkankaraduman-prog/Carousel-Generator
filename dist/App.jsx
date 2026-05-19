export default function App() {
  const images = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3"
  ];

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Carousel Generator</h1>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {images.map((src, i) => (
          <img key={i} src={src} style={{ width: "300px", borderRadius: "10px" }} />
        ))}
      </div>
    </div>
  );
}
