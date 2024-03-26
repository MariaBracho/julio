import AboutMeSection from "@/components/AboutMeSection";
import BrandSection from "@/components/BrandSection";
import Hero from "@/components/Hero";
import HonorableMentionSection from "@/components/HonorableMentionSection";
import Navbar from "@/components/Navbar";
import ProjectGallerySection from "@/components/ProjectGallery";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-white px-6 py-3 bg-[url('./../../public/images/background-hero.png')] bg-no-repeat">
      <Navbar />
      <Hero />
      <BrandSection />
      <ProjectGallerySection />
      <HonorableMentionSection />
      <AboutMeSection />
    </div>
  );
}
