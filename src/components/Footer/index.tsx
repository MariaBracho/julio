import Button from "@/components/Button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[498px] bg-[#0E0C1D] grid place-content-center relative">
      <Image
        src="/shapes/footer-shape.svg"
        alt="shape"
        fill
        className="w-full h-full absolute left-0 top-0 bottom-0 object-cover z-10"
      />
      <div className="w-full h-full flex flex-col justify-center items-center min-w-[820px] relative z-20">
        <div className="text-center mb-10 max-w-[700px]">
          <p className="text-white text-3xl font-bold mb-5">
            Listo para comenzar?
          </p>
          <p className="text-white text-xl">
            “La mejor manera de predecir el futuro es creándolo”
            <span className="text-[#7165FF]"> Comencemos creandolo juntos</span>
          </p>
        </div>
        <Button>Agendar reunión</Button>
        <div className="w-full flex justify-between items-center mt-[52px]">
          <div className="w-auto flex justify-center flex-col items-center">
            <div className="flex gap-4 mb-2 p-[10px]">
              <Image
                src="/images/profile-julio.webp"
                alt="profile"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <p className="text-[#999EAD] text-base">Diseñado por</p>
                <p className="text-white text-lg font-semibold">
                  Julio Quiñones
                </p>
              </div>
            </div>
            <a
              className="text-white font-semibold text-sm"
              href="https://www.linkedin.com/in/juliocquinones/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/juliocquinones/
            </a>
          </div>
          <div className="w-auto flex justify-center flex-col items-center">
            <div className="flex gap-4 mb-2 p-[10px]">
              <Image
                src="/images/profile-maria.jpg"
                alt="profile"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <p className="text-[#999EAD] text-base">Desarrollado por</p>
                <p className="text-white text-lg font-semibold">Maria Bracho</p>
              </div>
            </div>
            <a
              className="text-white font-semibold text-sm"
              href="https://www.linkedin.com/in/maria-bracho-villanueva/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/maria-bracho-villanueva/
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
