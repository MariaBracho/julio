import AboutMeSection from "@/components/AboutMeSection";
import BrandSection from "@/components/BrandSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HonorableMentionSection from "@/components/HonorableMentionSection";
import Navbar from "@/components/Navbar";
import ProjectGallerySection from "@/components/ProjectGallery";
import RecommendationsSection from "@/components/RecommendationsSection";
import PrefetchQueryProvider from "@/providers/PrefetchQueryProvider";
import fetchNotionPage from "@/services/fetchNotionPage";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    project: string;
  };
}) {
  const data = await fetchNotionPage(searchParams.project);

  return (
    <div className="w-full min-h-screen">
      <div className="relative flex min-h-screen flex-col items-center bg-white pt-3 px-6">
        <Navbar />
        <Hero />
        <div className="w-full max-w-[1170px]">
          <PrefetchQueryProvider>
            <BrandSection />
            <ProjectGallerySection
              recordMap={data}
              rootPageId={
                searchParams.project ?? "85be5b5026d64a1dbd2f40f54839568c"
              }
            />
            <HonorableMentionSection />
            <AboutMeSection />
            <EducationSection />
            <CertificatesSection />
            <RecommendationsSection />
          </PrefetchQueryProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
