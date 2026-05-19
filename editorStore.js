import { create } from "zustand";

export const useEditorStore = create((set) => ({
  slides: [],
  activeSlide: 0,

  setSlides: (slides) => set({ slides }),

  addSlide: (slide) =>
    set((state) => ({ slides: [...state.slides, slide] })),

  updateSlide: (index, data) =>
    set((state) => {
      const updated = [...state.slides];
      updated[index] = { ...updated[index], ...data };
      return { slides: updated };
    }),

  setActiveSlide: (index) => set({ activeSlide: index }),
}));
