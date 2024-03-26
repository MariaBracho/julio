import Card from "./Card";
import Tap from "./Tap";

export default function ProjectGallerySection() {
  return (
    <section className="flex flex-col items-center min-h-[962px]">
      <div className="flex">
        <Tap name="UX/UI Design" icon="/icons/circles-icons.svg" />
        <Tap name="Diseño Gráfico" icon="/icons/color-swatch-icon.svg" />
        <Tap name="Branding" icon="/icons/circles-icons.svg" />
      </div>
      <div className="flex justify-between gap-y-[34px] flex-wrap max-w-[1170px]">
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
        <Card image="/images/Img.png" title="Hutrit" category="UX/UI Design" />
      </div>
    </section>
  );
}
