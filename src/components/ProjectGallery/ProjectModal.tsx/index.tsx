"use client";

import Image from "next/image";
import { createPortal } from "react-dom";

import { NotionRenderer } from "react-notion";

import { useQuery } from "@tanstack/react-query";
import { useScrollLock } from "usehooks-ts";

import fetchNotionPage from "@/services/fetchNotionPage";
import { useEffect } from "react";
import getUUIDFromNotionURL from "@/utils/getUUIDFromNotionURL";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import cls from "classnames";

interface ModalProps {
  onClose: () => void;
  title: string;
  category: string;
  icon: string;
  url: string;
}

export default function ProjectModal({
  onClose,
  url,
  title,
  icon,
  category,
}: ModalProps) {
  const { data: blockMap, isLoading } = useQuery({
    queryKey: ["notionData"],
    queryFn: async () => await fetchNotionPage(getUUIDFromNotionURL(url)),
  });

  useScrollLock();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onClose]);

  return createPortal(
    <div className="flex flex-col inset-0 fixed z-50  bg-black/75 backdrop-blur h-full w-full">
      <div
        className={cls(
          "w-full text-sm text-white/50 px-4 h-[72px]",
          "grid grid-cols-3"
        )}
      >
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-green-600" />
          <p>Proximas actualizaciones</p>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Image
            src={icon ?? ""}
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="flex gap-1 items-center ">
            <div>
              <p className="text-base font-bold text-white">{title}</p>
            </div>
            <div>
              <p>|</p>
            </div>
            <div>
              <p>{category}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <p>Cerrar (esc)</p>
          <Image
            onClick={onClose}
            src="/icons/close-icon.svg"
            alt="close icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full bg-white rounded-t-[32px] p-y h-full overflow-hidden">
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
          <div className="max-w-3xl mx-auto my-0 w-full rounded-t-[32px} h-full">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="w-full px-4">
                <NotionRenderer fullPage hideHeader blockMap={blockMap} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
