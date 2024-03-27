export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 w-full text-sm rounded-3xl h-[68px] flex justify-between bg-bgGrey items-center px-6 backdrop-blur-md">
      <div className="flex flex-col">
        <p className="font-bold">Julio Quiñones</p>
        <p className="font-medium text-primary-text/50">UX/UI Design</p>
      </div>
      <div>
        <ul className="flex gap-[72px]">
          <li className="hover:text-primary-cta focus:text-primary-cta hover:font-medium">
            <a href="#hero">Inicio</a>
          </li>
          <li className="hover:text-primary-cta focus:text-primary-cta hover:font-medium">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="hover:text-primary-cta focus:text-primary-cta hover:font-medium">
            <a href="#honorable-mention">Mención Honorifica</a>
          </li>
          <li className="hover:text-primary-cta focus:text-primary-cta hover:font-medium">
            <a href="#about-me">Sobre mi</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="cursor-pointer">Contactame</p>
      </div>
    </nav>
  );
}
