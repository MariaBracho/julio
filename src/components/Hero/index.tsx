import Image from "next/image";
import HonorableMentionIcon from "../HonorableMentionIcon";

export default function Hero() {
  return (
    <main className="grid place-content-center ">
      <div className="mt-[140px]">
        <div className="text-center flex flex-col gap-[27px] items-center">
          <p className="font-extrabold text-[52px] w-[761px] leading-none">
            ¡Hola! 👋 Soy Julio Quiñones, diseñador UX/UI
          </p>
          <p>“La mejor manera de predecir el futuro es creándolo”</p>
          <button className="bg-[#4A3AFF] rounded-full h-12 w-[208px] text-white">
            Agendar reunión
          </button>
        </div>
        <div className="mt-[54px] mb-[4.5px]">
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
            <p className="font-extrabold">Mención Honorifica</p>
            <p className="text-xs">Platzi y Torres Burriel estudio</p>
            <p className="text-xs font-extrabold">2022</p>
          </div>
          <Image
            className="scale-x-[-1]"
            src="/icons/spike-icon.svg"
            alt="spike"
            width={29}
            height={56}
          />
        </div>
      </div>
    </main>
  );
}
