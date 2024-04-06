"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

import { getProjectsQuery } from "@/queries/getProjectsquery";

import Card from "./Card";
import cls from "classnames";

import style from "./projects.module.css";

export default function ListOfProjects({
  categoryName,
}: {
  categoryName: string;
}) {
  const supabase = useSupabaseBrowser();

  const { data: projects } = useQuery(getProjectsQuery(supabase));

  const filteredProjects = projects?.filter(
    (project) => project.categories?.name === categoryName
  );

  return (
    <div
      className={cls(
        "w-full justify-items-center gap-x-3 gap-y-9",
        style.listOfProjects
      )}
    >
      {projects &&
        filteredProjects &&
        filteredProjects.map(
          ({ id, title, categories, img, logo, url_link }) => {
            return (
              <Card
                key={id}
                url={url_link}
                image={img}
                title={title ?? ""}
                icon={logo}
                category={categories?.name ?? ""}
              />
            );
          }
        )}
    </div>
  );
}
