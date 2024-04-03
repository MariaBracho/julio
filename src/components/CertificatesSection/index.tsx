import Image from "next/image";
import ListOfCertificates from "./ListOfCertificates";

export default function CertificatesSection() {
  return (
    <section className="flex flex-col w-full items-center my-10">
      <div>
        <p className="title">
          <span className="text-primary-cta">Más de 47 </span>
          curso certificado
        </p>
        <p className="sub-title w-[720px]">
          Me he certificado en cursos dentro de la carrera de Product Design,
          UI/UX, Diseño Gráfico y Marketing Digital
        </p>
      </div>
      <div className="my-5 flex gap-3 cursor-pointer">
        <p className="text-base font-bold text-primary-cta">
          Ver todos los certificados
        </p>
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow right icon"
          width={24}
          height={24}
        />
      </div>
      <ListOfCertificates />
    </section>
  );
}
