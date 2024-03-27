import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="w-full flex flex-col mt-20 items-center">
      <div className="h-[532px] w-[870px] relative">
        <Image
          className="absolute bottom-0 mx-auto left-2/4 -ml-6 animate-bounce"
          src="/icons/arrow-bottom.svg"
          alt="arrow"
          width={48}
          height={48}
        />
        <div id="projects" className="absolute top-1/2" />
        <Image
          src="/images/julio.png"
          alt="julio"
          width={870}
          height={532}
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="title">Proyectos Design</p>
        <p className="sub-title w-[761px]">
          He demostrados mis habilidades en más de 5 proyectos, entre empresas
          de Hutrit, Clarissa De La Torre, Ingnovas.
        </p>
      </div>
    </section>
  );
}
