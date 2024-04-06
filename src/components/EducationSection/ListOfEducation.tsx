"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";
import EducationCard from "./EducationCard";

import { getEducationQuery } from "@/queries/getEducationQuery";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

export default function ListOfEducation() {
  const client = useSupabaseBrowser();

  const { data: education } = useQuery(getEducationQuery(client));

  return (
    <div className="gap-2 flex flex-wrap w-full">
      {education &&
        education.map(
          ({
            id,
            isEducationFinish,
            logo,
            training,
            start_date,
            end_date,
            institution,
          }) => {
            return (
              <EducationCard
                key={id}
                logo={logo}
                startDate={start_date}
                endDate={end_date}
                training={training}
                institution={institution}
                isEducationFinish={isEducationFinish}
              />
            );
          }
        )}
    </div>
  );
}
