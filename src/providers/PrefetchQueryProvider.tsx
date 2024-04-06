import { getCategoriesQuery } from "@/queries/getCategoriesQuery";
import { getCertificatesQuery } from "@/queries/getCertificatesQuery";
import { getEducationQuery } from "@/queries/getEducationQuery";
import { getProjectsQuery } from "@/queries/getProjectsquery";
import { getRecommendations } from "@/queries/getRecommendations";
import { getSkillQuery } from "@/queries/getSkillsQuery";
import { getWorkExperiencesQuery } from "@/queries/getWorkExperiencesQuery";
import useSupabaseServer from "@/utils/supabase-server";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";

export default async function PrefetchQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getCertificatesQuery(supabase));
  await prefetchQuery(queryClient, getProjectsQuery(supabase));
  await prefetchQuery(queryClient, getCategoriesQuery(supabase));
  await prefetchQuery(queryClient, getWorkExperiencesQuery(supabase));
  await prefetchQuery(queryClient, getSkillQuery(supabase));
  await prefetchQuery(queryClient, getEducationQuery(supabase));
  await prefetchQuery(queryClient, getRecommendations(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
