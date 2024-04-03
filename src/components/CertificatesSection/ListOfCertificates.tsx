"use client";

import { getCertificatesQuery } from "@/queries/getCertificatesQuery";

import useSupabaseBrowser from "@/utils/supabase-browser";

import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";

import Image from "next/image";

import style from "./certificate.module.css";

export default function ListOfCertificates() {
  const supabase = useSupabaseBrowser();

  const { data: certificates } = useQuery(getCertificatesQuery(supabase));
  return (
    <div className={`${style.listOfCertificates} gap-3 justify-items-center`}>
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
