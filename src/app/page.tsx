import BrandSection from "@/components/BrandSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectGallery/ProjectModal.tsx";
import PrefetchQueryProvider from "@/providers/PrefetchQueryProvider";
import fetchNotionPage from "@/services/fetchNotionPage";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AboutMeSection = dynamic(() => import("@/components/AboutMeSection"));
const HonorableMentionSection = dynamic(
  () => import("@/components/HonorableMentionSection")
);
const EducationSection = dynamic(() => import("@/components/EducationSection"));
const CertificatesSection = dynamic(
  () => import("@/components/CertificatesSection")
);
const RecommendationsSection = dynamic(
  () => import("@/components/RecommendationsSection")
);

const ProjectGallerySection = dynamic(
  () => import("@/components/ProjectGallery")
);

const Footer = dynamic(() => import("@/components/Footer"));

export default async function Page({
  searchParams,
}: {
  searchParams: {
    project?: string;
    id?: string;
  };
}) {
  const queryProject = searchParams?.project ?? "";
  const queryId = searchParams?.id ?? "";
  const data = await fetchNotionPage(queryProject);

  return (
    <div className="w-full min-h-screen">
      <div className="relative flex min-h-screen flex-col items-center bg-white pt-3 px-6">
        <Navbar />
        <Hero />
        <div className="w-full max-w-[1170px]">
          <PrefetchQueryProvider>
            <BrandSection />
            <Suspense fallback={null}>
              <ProjectGallerySection />
            </Suspense>
            <HonorableMentionSection />
            <AboutMeSection />
            <EducationSection />
            <CertificatesSection />
            <RecommendationsSection />
          </PrefetchQueryProvider>
        </div>
      </div>
      <Footer />
      <Suspense fallback={null}>
        <ProjectModal id={queryId} recordMap={data} rootPageId={queryProject} />
      </Suspense>
    </div>
  );
}
