"use client";

import Image from "next/image";

import { useObserverSection } from "@/hooks/useObserverSection";
import HonorableMentionIcon from "@/components/HonorableMentionIcon";

export default function Hero() {
  const observe = useObserverSection();

  return (
    <section
      {...observe}
      id="hero"
      className="h-screen w-full grid place-content-center relative"
    >
      <div className="relative z-40">
        <div className="flex flex-col gap-7 items-center">
          <p className="title w-[761px] leading-none">
            ¡Hola! 👋 Soy Julio Quiñones, diseñador UX/UI
          </p>
          <p className="sub-title">
            “La mejor manera de predecir el futuro es creándolo”
          </p>
          <button className="bg-primary-cta rounded-full h-12 w-[208px] text-white text-sm">
            Agendar reunión
          </button>
        </div>
        <div className="mt-14 mb-1">
          <HonorableMentionIcon />
        </div>
        <div className="flex justify-center">
          <Image
            src="/icons/spike-icon.svg"
            alt="spike"
            width={29}
            height={56}
          />
          <div className="text-center">
            <p className="font-extrabold text-sm font-alegreya">
              Mención Honorifica
            </p>
            <p className="text-xs">Platzi y Torres Burriel estudio</p>
            <p className="text-xs font-extrabold">2022</p>
          </div>
          <Image
            className="scale-x-[-1]"
            src="/icons/spike-icon.svg"
            alt="spike"
            priority
            width={29}
            height={56}
          />
        </div>
      </div>
      <div className="absolute h-screen w-full">
        <Image
          src="/images/background-hero.png"
          alt="background hero"
          className="object-cover w-full h-full"
          fill
        />
      </div>
    </section>
  );
}
