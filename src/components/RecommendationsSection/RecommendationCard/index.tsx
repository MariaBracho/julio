import Image from "next/image";

import style from "./recomendationCard.module.css";

export default function RecommendationCard() {
  return (
    <div
      className={`p-7 w-[523px] h-[256px] bg-white rounded-lg ${style.shadowCard}`}
    >
      <div className="flex gap-4 mb-4">
        <Image
          className="rounded-full"
          src="/images/profile-julio.webp"
          width={62}
          height={62}
          alt="profile"
        />
        <div>
          <p className="font-semibold text-lg text-[#2B2D33]">
            Karla Zhañay Loza
          </p>
          <p className="text-base text-[#999EAD]">Marketing Especialist</p>
        </div>
      </div>
      <div>
        <p className="text-base text-secondary-text line-clamp-4">
          Excelente profesional y ser humano.En la generación del contenido
          solicitado para redes sociales aplica técnicas asertivas. Proactividad
          para la aplicación de procesos y softwares idóneos para la creación,
          desarrollo y ejecución de las actividades relacionadas.
        </p>
      </div>
    </div>
  );
}
