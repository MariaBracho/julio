"use client";

import { useMemo, useRef, useState } from "react";

import { useObserverSection } from "@/hooks/useObserverSection";

import useSupabaseBrowser from "@/utils/supabase-browser";

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getCategoriesQuery } from "@/queries/getCategoriesQuery";

import Tap from "./Tap";
import ListOfProjects from "./ListOfProjects";
import { ExtendedRecordMap } from "notion-types";

export default function ProjectGallerySection({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}) {
  const ref = useRef(null);
  const observe = useObserverSection();

  const supabase = useSupabaseBrowser();

  const { data: categories } = useQuery(getCategoriesQuery(supabase));

  const firstCategory = categories?.[0].name ?? "";

  const [activeTab, setActiveTab] = useState(firstCategory);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const tapPositionGenerator = useMemo(() => {
    return categories
      ? categories.reduce((acc: Record<string, string>, { name }, index) => {
          acc[name] = `${index * 309.122}px`;
          return acc;
        }, {})
      : null;
  }, [categories]);

  return (
    <div
      {...observe}
      id="projects"
      className="w-full flex flex-col items-center min-h-[962px]"
    >
      <div className="mb-11 w-full flex flex-col justify-center">
        <div className="flex w-full justify-center">
          <div className="w-[927px] flex">
            {categories &&
              categories.map(({ name, id, icon }) => (
                <Tap
                  key={id}
                  isActivate={activeTab === name}
                  onClickTap={handleTabClick}
                  name={name}
                  icon={icon ?? ""}
                />
              ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#D9DBE9] flex justify-center">
          <div className="w-[927px] relative ">
            {tapPositionGenerator && (
              <div
                ref={ref}
                style={{ left: tapPositionGenerator[activeTab] }}
                className="absolute bg-primary-cta h-full w-[309.122px] transition-all duration-300 ease-in-out"
              />
            )}
          </div>
        </div>
      </div>
      <ListOfProjects
        recordMap={recordMap}
        rootPageId={rootPageId}
        categoryName={activeTab}
      />
    </div>
  );
}
