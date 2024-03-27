"use client";

import Image from "next/image";

import { useObserverSection } from "@/hooks/useObserverSection";

import { SKILLS } from "@/constants/skills";

import Badge from "./Badge";
import WorkExperienceCard from "./WorkExperienceCard";

export default function AboutMeSection() {
  const observe = useObserverSection();

  return (
    <section
      {...observe}
      id="about-me"
      className="flex flex-col min-h-[1158px] w-full items-center"
    >
      <div className="mb-16">
        <p className="title">Sobre mi</p>
        <p className="sub-title">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <div className="grid grid-cols-2 w-full min-h-[876px] rounded-2xl overflow-hidden">
        <section className="bg-primary-content border rounded-l-2xl border-primary-border h-full w-full px-6 py-8">
          <Image
            src="/images/profile-julio.webp"
            alt="profile"
            className="rounded-full mb-6"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-primary-text mt-3">
            Julio Quiñones
          </p>
          <p className="text-primary-text/75 font-medium text-lg">
            User interface designer
          </p>
          <p className="text-primary-text/50 text-base font-medium">
            Diseñador UX/UI | Diseñador Gráfico
          </p>
          <div className="flex items-center text-[#656D76] ">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin"
              width={18}
              height={18}
              className="mr-[10px]"
            />
            <p className="text-base font-bold">Linkedin</p>
            <p className="font-medium mx-1">•</p>
            <a
              className="text-lg font-medium underline"
              href="https://www.linkedin.com/in/juliocquinones/"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin.com/in/juliocquinones
            </a>
          </div>
          <div className="mt-4">
            <p className="text-xl font-semibold my-3">Skills</p>
            <div className="flex flex-wrap gap-2 ">
              {SKILLS.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </div>
        </section>
        <section className="bg-[#E7E7E7] w-full h-full px-8 py-10 flex flex-col items-center">
          <div className="flex gap-2 items-center mb-10">
            <div className="rounded-[14px] bg-primary-cta/10 w-12 h-12 grid place-content-center">
              <Image
                src="/icons/shapes-icon.svg"
                alt="shapes"
                width={28}
                height={28}
              />
            </div>
            <p className="text-xl font-semibold">Experiencia laboral</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <WorkExperienceCard />
            <WorkExperienceCard />
            <WorkExperienceCard />
            <WorkExperienceCard />
            <WorkExperienceCard />
          </div>
        </section>
      </div>
    </section>
  );
}
