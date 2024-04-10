import cls from "classnames";
import Image from "next/image";

export default function HeaderModal({
  onClose,
  title,
  category,
  icon,
}: {
  onClose: () => void;
  title: string;
  category: string;
  icon?: string;
}) {
  return (
    <div
      className={cls(
        "w-full text-sm text-white/50 px-4 h-[72px]",
        "grid grid-cols-3"
      )}
    >
      <div className="flex gap-x-2 items-center">
        <div className="w-4 h-4 rounded-full bg-green-600" />
        <p>Proximas actualizaciones</p>
      </div>
      <div className="flex items-center gap-3 justify-center rounded-full">
        <Image
          src={icon ?? ""}
          alt="logo"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex gap-1 items-center ">
          <div>
            <p className="text-base font-bold text-white">{title}</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>{category}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end">
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
  );
}
