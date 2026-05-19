import { useEditorStore } from "./features/editor/editorStore";
import { generateCarousel } from "./features/carousel/carouselEngine";

export default function App() {
  const { slides, setSlides } = useEditorStore();

  const handleGenerate = (text) => {
    const result = generateCarousel(text, "modern");
    setSlides(result);
  };

  return (
    <div>
      <h1>Carousel Generator SaaS</h1>

      <button onClick={() => handleGenerate("Your text here")}>
        Generate
      </button>

      <div>
        {slides.map((s) => (
          <div key={s.id}>
            {s.content}
          </div>
        ))}
      </div>
    </div>
  );
}
