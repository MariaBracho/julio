import { useIntersectionObserver } from "usehooks-ts";

import { useActiveSectionStore } from "@/stores/activeSectionStore";

export const useObserverSection = () => {
  const { setActiveSection } = useActiveSectionStore();

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting, evt) => {
      if (isIntersecting) {
        setActiveSection(evt.target.id);
      }
    },
  });

  return { ref };
};
