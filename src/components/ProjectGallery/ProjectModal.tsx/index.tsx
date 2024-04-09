"use client";

import Image from "next/image";
import { createPortal } from "react-dom";

import { useScrollLock } from "usehooks-ts";

import { useEffect } from "react";

import cls from "classnames";

import Link from "next/link";
import dynamic from "next/dynamic";

import { NotionRenderer } from "react-notion-x";

import { ExtendedRecordMap } from "notion-types";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import "./project.css";

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

interface ModalProps {
  onClose: () => void;
  title: string;
  category: string;
  icon: string;
  recordMap: ExtendedRecordMap | undefined;
  rootPageId?: string;
  hasProject?: boolean;
}
export default function ProjectModal({
  onClose,
  title,
  icon,
  category,
  recordMap,
  hasProject,
  rootPageId,
}: ModalProps) {
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
        <div className="flex gap-x-2 items-center">
          <div className="w-4 h-4 rounded-full bg-green-600" />
          <p>Proximas actualizaciones</p>
        </div>
        <div className="flex items-center gap-3 justify-center rounded-full">
          <Image
            src={icon ?? ""}
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
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
      <div className="w-full bg-white py-0 my-0 rounded-t-[32px] h-full overflow-hidden relative">
        <div className="w-full h-full rounded-t-[32px] overflow-y-auto scrollbar-hide">
          <div className="w-full my-0  rounded-t-[32px} h-full">
            {recordMap && hasProject ? (
              <NotionRenderer
                fullPage
                darkMode={false}
                rootPageId={rootPageId}
                disableHeader
                recordMap={recordMap}
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
            ) : (
              <p>...isLoading</p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
