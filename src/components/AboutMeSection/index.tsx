import Image from "next/image";
import Badge from "./Badge";

export default function AboutMeSection() {
  return (
    <section className="flex flex-col min-h-[1158px] w-full items-center">
      <div className="text-center">
        <p className="text-[52px] font-extrabold text-[#333333]">Sobre mi</p>
        <p className="text-[#555A65]">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <div className="grid grid-cols-2 w-full max-w-[1170px] h-[876px] rounded-2xl overflow-hidden">
        <div className="bg-[#F9FAFB] h-full w-full p-6">
          <div className="w-[100px] h-[100px] rounded-full"></div>
          <p className="text-xl font-semibold text-[#161619]">Julio Quiñones</p>
          <p className="text-[#656D76] font-medium text-lg">
            User interface designer
          </p>
          <p className="text-[#A0A9B4] text-base font-medium">
            Diseñador UX/UI | Diseñador Gráfico
          </p>
          <div className="flex">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="linkedin"
              width={18}
              height={18}
            />
            <p className="text-[#656D76] text-base font-bold">Linkedin</p>
            <p>.</p>
            <p>linkedin.com/in/Juanbuitragog</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Skills</p>
            <Badge>fdsfdsf</Badge>
          </div>
        </div>
        <div className="bg-[#E7E7E7] w-full h-full"></div>
      </div>
    </section>
  );
}
