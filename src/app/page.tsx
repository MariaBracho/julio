import AboutMeSection from "@/components/AboutMeSection";
import BrandSection from "@/components/BrandSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import Hero from "@/components/Hero";
import HonorableMentionSection from "@/components/HonorableMentionSection";
import Navbar from "@/components/Navbar";
import ProjectGallerySection from "@/components/ProjectGallery";
import RecommendationsSection from "@/components/RecommendationsSection";
import PrefetchQueryProvider from "@/providers/PrefetchQueryProvider";

export default async function Page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-white px-6 py-3">
      <Navbar />
      <Hero />
      <div className="w-full max-w-[1170px]">
        <PrefetchQueryProvider>
          <BrandSection />
          <ProjectGallerySection />
          <HonorableMentionSection />
          <AboutMeSection />
          <EducationSection />
          <CertificatesSection />
          <RecommendationsSection />
        </PrefetchQueryProvider>
      </div>
    </div>
  );
}
