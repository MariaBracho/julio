"use client";

import { getCertificatesQuery } from "@/queries/getCertificatesQuery";

import useSupabaseBrowser from "@/utils/supabase-browser";

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

import { getProjectsQuery } from "@/queries/getProjectsquery";

import Card from "./Card";

export default function ListOfProjects() {
  const supabase = useSupabaseBrowser();

  const { data: projects } = useQuery(getProjectsQuery(supabase));
  return (
    <div className="flex justify-between gap-y-[34px] flex-wrap max-w-[1170px]">
      {projects &&
        projects.map(({ id, title, categories, img, logo }) => {
          return (
            <Card
              key={id}
              image={img}
              title={title ?? ""}
              icon={logo}
              category={categories?.name ?? ""}
            />
          );
        })}
    </div>
  );
}
