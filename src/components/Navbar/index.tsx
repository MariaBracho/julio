export default function Navbar() {
  return (
    <nav className="w-full rounded-3xl h-[68px] flex justify-between bg-bgGrey items-center px-6 backdrop-blur-md">
      <div className="flex flex-col">
        <p className="font-bold">Julio Quiñones</p>
        <p className="font-medium text-[#333333]/50">UX/UI Design</p>
      </div>
      <div>
        <ul className="flex gap-[72px]">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Mención Honorifica</a>
          </li>
          <li>
            <a href="#">Sobre mi</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contactame</p>
      </div>
    </nav>
  );
}
