"use client";

import { getCertificatesQuery } from "@/queries/getCertificatesQuery";

import useSupabaseBrowser from "@/utils/supabase-browser";

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

import Image from "next/image";

export default function ListOfCertificates() {
  const supabase = useSupabaseBrowser();

  const { data: certificates } = useQuery(getCertificatesQuery(supabase));
  return (
    <div className="flex flex-wrap justify-between gap-y-2">
      {certificates &&
        certificates.map(({ id, img }) => {
          return (
            <Image
              key={id}
              src={img}
              className="rounded-lg object-cover h-48 w-72"
              alt="certicate"
              width={288}
              height={192}
            />
          );
        })}
    </div>
  );
}
