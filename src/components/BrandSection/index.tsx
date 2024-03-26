import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="flex flex-col mt-[77px] items-center">
      <div className="w-[836px] flex flex-col items-center">
        <div className="h-[532px] w-[870px] relative">
          <Image
            className="absolute bottom-0 mx-auto left-2/4 ml-[-24px] animate-bounce"
            src="/icons/arrow-bottom.svg"
            alt="arrow"
            width={48}
            height={48}
          />
          <Image src="/images/julio.png" alt="julio" width={870} height={532} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[52px] font-extrabold">Proyectos Design</p>
          <p className="text-[#555A65] text-center w-[761px]">
            He demostrados mis habilidades en más de 5 proyectos, entre empresas
            de Hutrit, Clarissa De La Torre, Ingnovas.
          </p>
        </div>
      </div>
    </section>
  );
}
