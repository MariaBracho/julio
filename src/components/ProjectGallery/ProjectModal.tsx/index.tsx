import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
}

export default function ProjectModal({ onClose }: ModalProps) {
  console.log("modal rendered");

  const url =
    "https://blue-quart-300.notion.site/Arquitectura-Front-end-a66ff5b27d054439822f6f0ea89e19d4";

  useEffect(() => {
    // Deshabilitar el scroll al montar el componente
    document.body.style.overflowY = "hidden";

    // Habilitar el scroll al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div className="flex flex-col fixed inset-0 z-50  bg-black/75 backdrop-blur">
      <div className="w-full flex justify-between items-center text-white/50 px-4 h-[72px]">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-green-600" />
          <p>Proximas actualizaciones</p>
        </div>
        <div className="flex gap-2">
          <p>Cerrar (esc)</p>
          <Image
            onClick={onClose}
            src="/icons/close-icon.svg"
            alt="close icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="relative z-50 bg-white w-full rounded-t-[32px] p-4 flex-1"></div>
    </div>,
    document.body
  );
}
