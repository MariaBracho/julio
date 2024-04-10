"use client";

import { createPortal } from "react-dom";

import { useScrollLock } from "usehooks-ts";

import { useCallback, useEffect } from "react";

import Link from "next/link";
import dynamic from "next/dynamic";

import { NotionRenderer } from "react-notion-x";

import { ExtendedRecordMap } from "notion-types";
import HeaderModal from "./HeaderModal";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import "./project.css";
import { useActiveProjectModal } from "@/stores/projectModalActive";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ShowProjectModal from "@/hocs/ShowProjectModal";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getProjectByIdQuery } from "@/queries/getProjectsquery";
import useSupabaseBrowser from "@/utils/supabase-browser";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

function ProjectModal({
  recordMap,
  rootPageId,
  id,
}: {
  recordMap?: ExtendedRecordMap;
  rootPageId: string;
  id: string;
}) {
  const { data, fetchData, setFetchData, setActiveModal } =
    useActiveProjectModal();

  const client = useSupabaseBrowser();

  const { data: project, isLoading: isLoadingProject } = useQuery(
    getProjectByIdQuery(client, Number(id))
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();

  const onCloseModal = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("project");
    replace(pathname + "#projects");
    setActiveModal(false);
  }, [searchParams, pathname, replace, setActiveModal]);

  useScrollLock();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseModal();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onCloseModal]);

  useEffect(() => {
    if (recordMap && rootPageId) {
      setFetchData({
        recordMap,
        rootPageId,
      });
    }
  }, [recordMap, rootPageId, setFetchData]);

  return createPortal(
    <div className="flex flex-col inset-0 fixed z-50  bg-black/75 backdrop-blur h-full w-full">
      <HeaderModal
        icon={project?.[0].logo ?? data?.icon}
        onClose={onCloseModal}
        category={project?.[0]?.categories?.name ?? data?.category ?? ""}
        title={project?.[0]?.title ?? data?.title ?? ""}
      />
      <div className="w-full bg-white py-0 my-0 rounded-t-[32px] h-full overflow-hidden relative">
        <div className="w-full h-full rounded-t-[32px] overflow-y-auto scrollbar-hide">
          <div className="w-full my-0  rounded-t-[32px} h-full">
            {data && fetchData ? (
              <NotionRenderer
                fullPage
                darkMode={false}
                rootPageId={fetchData.rootPageId}
                disableHeader
                recordMap={fetchData.recordMap as ExtendedRecordMap}
                previewImages
                showTableOfContents
                components={{
                  nextLink: Link,
                  Code,
                  Collection,
                  Equation,
                  Modal,
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ShowProjectModal()(ProjectModal);
