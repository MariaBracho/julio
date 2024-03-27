import { create } from "zustand";
import { persist } from "zustand/middleware";

type ActiveSectionStore = {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
};

export const useActiveSectionStore = create(
  persist<ActiveSectionStore>(
    (set) => ({
      activeSection: "hero",
      setActiveSection: (activeSection: string) => set({ activeSection }),
    }),
    {
      name: "activeSection",
    }
  )
);
