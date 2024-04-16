"use client";

import Image from "next/image";

import HonorableMentionIcon from "@/components/HonorableMentionIcon";
import Card from "@/components/ProjectGallery/Card";

import { useObserverSection } from "@/hooks/useObserverSection";
import Link from "next/link";

export default function HonorableMentionSection() {
  const observe = useObserverSection();

  return (
    <section
      {...observe}
      id="honorable-mention"
      className="min-h-[627px] w-full"
    >
      <HonorableMentionIcon />
      <div className="mb-12">
        <p className="title">Mención Honorifico🎖️</p>
        <p className="sub-title">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <div className="h-[360px] bg-[#CBC7FF] relative overflow-hidden rounded-2xl">
        <Image
          src="/shapes/banner.svg"
          alt="shape"
          width={1170}
          height={360}
          className="absolute z-10"
        />

        <Image
          src="/images/gradient-texture.png"
          alt="shape"
          width={385}
          height={360}
          className="w-[385px] h-full absolute right-0  z-10"
        />

        <div className="flex gap-20 items-center relative  px-[22px] w-full h-full z-40">
          <Card
            isOpenProject={false}
            icon="/images/aslan-logo.png"
            image="/images/aslan-project.jpg"
            title="Aslan app"
            category="UX/UI Design"
          />
          <div className="max-w-[610px] w-full">
            <p className="font-semibold text-xl text-black mb-2">
              Mención honorífica por Platzi y Torresburriel Estudio 2022
              #DiseñaTuMarcaYUX 06/2022 - 09/2022
            </p>
            <p className="text-base text-black/50">
              Aslan es un proyecto que llevé desde la investigación inicial
              hasta el desarrollo de un prototipo de alta fidelidad usando
              Design Thinking. Realicé análisis de mercado, definí usuarios y
              sus trayectorias, ideé soluciones y creé una identidad de marca.
              Concluí con pruebas de usabilidad en wireframes y un prototipo
              final en Figma, asegurando un diseño efectivo y centrado en el
              usuario.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                href="/?project=5eee65cf5fd0472fbdc4265ff880b7c0&id=32"
                className="text-primary-cta font-bold text-base"
              >
                Ver proyecto Aslan App
              </Link>
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
