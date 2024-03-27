"use client";

import MenuLink from "./MenuLink";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 w-full text-sm rounded-3xl h-[68px] flex justify-between bg-bgGrey items-center px-6 backdrop-blur-md">
      <div className="flex flex-col">
        <p className="font-bold">Julio Quiñones</p>
        <p className="font-medium text-primary-text/50">UX/UI Design</p>
      </div>
      <div>
        <ul className="flex gap-[72px]">
          <MenuLink href="#hero">Inicio</MenuLink>
          <MenuLink href="#projects">Proyectos</MenuLink>
          <MenuLink href="#honorable-mention">Mención Honorifica</MenuLink>
          <MenuLink href="#about-me">Sobre mi</MenuLink>
        </ul>
      </div>
      <div>
        <p className="cursor-pointer">Contactame</p>
      </div>
    </nav>
  );
}
