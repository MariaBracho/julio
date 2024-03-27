"use client";

import { useIntersectionObserver } from "usehooks-ts";
import { useActiveSectionStore } from "@/stores/activeSectionStore";

export default function withObserveSection<T>(Component: React.FC<T>) {
  function Wrapper(props: T) {
    const { setActiveSection } = useActiveSectionStore();

    const { ref } = useIntersectionObserver({
      threshold: 0.5,
      onChange: (isIntersecting, evt) => {
        isIntersecting && setActiveSection(evt.target.id);
      },
    });

    return <Component {...props} ref={ref} />;
  }

  Wrapper.displayName = Component.displayName;

  return Wrapper as React.FC<T>;
}
