"use client";

import { useObserverSection } from "@/hooks/useObserverSection";
import Card from "./Card";
import Tap from "./Tap";

export default function ProjectGallerySection() {
  const observe = useObserverSection();
  return (
    <div
      {...observe}
      id="projects"
      className="w-full flex flex-col items-center min-h-[962px]"
    >
      <div className="flex">
        <Tap name="UX/UI Design" icon="/icons/circles-icons.svg" />
        <Tap name="Diseño Gráfico" icon="/icons/color-swatch-icon.svg" />
        <Tap name="Branding" icon="/icons/shapes-icon.svg" />
      </div>
      <div className="flex justify-between gap-y-[34px] flex-wrap max-w-[1170px]">
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
      </div>
    </div>
  );
}
