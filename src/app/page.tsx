import AboutMeSection from "@/components/AboutMeSection";
import BrandSection from "@/components/BrandSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import Hero from "@/components/Hero";
import HonorableMentionSection from "@/components/HonorableMentionSection";
import Navbar from "@/components/Navbar";
import ProjectGallerySection from "@/components/ProjectGallery";
import RecommendationsSection from "@/components/RecommendationsSection";
import { getCategoriesQuery } from "@/queries/getCategoriesQuery";
import { getCertificatesQuery } from "@/queries/getCertificatesQuery";
import { getProjectsQuery } from "@/queries/getProjectsquery";
import useSupabaseServer from "@/utils/supabase-server";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";

export default async function Page() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getCertificatesQuery(supabase));
  await prefetchQuery(queryClient, getProjectsQuery(supabase));
  await prefetchQuery(queryClient, getCategoriesQuery(supabase));

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-white px-6 py-3">
      <Navbar />
      <Hero />
      <div className="w-full max-w-[1170px]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BrandSection />
          <ProjectGallerySection />
          <HonorableMentionSection />
          <AboutMeSection />
          <EducationSection />
          <CertificatesSection />
          <RecommendationsSection />
        </HydrationBoundary>
      </div>
    </div>
  );
}
