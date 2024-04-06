"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import { useHover } from "usehooks-ts";

import cls from "classnames";
import ProjectModal from "@/components/ProjectGallery/ProjectModal.tsx";

interface CardProps {
  image: string;
  title: string;
  category: string;
  icon: string;
  url?: string;
  isOpenProject?: boolean;
}

export default function Card({
  image,
  title,
  category,
  icon,
  url,
  isOpenProject = true,
}: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  const isHovering = useHover(ref);

  const isShowHover = isOpenProject ? isHovering : false;

  return (
    <>
      {showModal && (
        <ProjectModal
          url={url ?? ""}
          title={title}
          category={category}
          icon={icon}
          onClose={() => setShowModal(false)}
        />
      )}
      <div
        onClick={() => isOpenProject && setShowModal(true)}
        ref={ref}
        data-ishover={isShowHover}
        className={cls(
          "w-[370px] h-[320px] rounded-[36px] border border-primary-border bg-primary-content overflow-hidden",
          "data-[ishover=true]:cursor-pointer data-[ishover=true]:bg-[#CBC7FF]",
          "transition-all duration-100 linear"
        )}
      >
        <div className="px-1 pt-1">
          <div className="relative h-[251px] w-[362px] rounded-[32px]">
            <Image
              src={image}
              width={362}
              height={251}
              alt="project"
              className="h-[251px] w-[362px] object-cover rounded-[32px] absolute"
            />
            <div
              data-ishover={isShowHover}
              className={cls(
                "bg-black/75 h-[251px] w-[362px] rounded-[32px]",
                "hidden absolute data-[ishover=true]:grid",
                "place-items-center"
              )}
            >
              <div className="flex text-white gap-2">
                <Image
                  src="/icons/visibility-icon.svg"
                  alt="visibility icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p>Ver Proyecto</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 p-2">
          <div className="h-8 w-8 bg-[#D9D9D9] rounded-full flex justify-center items-center relative">
            <Image
              src={icon ?? ""}
              width={32}
              height={32}
              alt="icon"
              className="object-cover h-8 w-8 rounded-full"
            />
          </div>
          <div>
            <p
              data-ishover={isShowHover}
              className={cls(
                "font-bold text-base",
                "text-primary-text data-[ishover=true]:text-primary-cta"
              )}
            >
              {title}
            </p>
            <p className="text-black/50 text-sm">{category}</p>
          </div>
        </div>
      </div>
    </>
  );
}
