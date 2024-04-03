import Image from "next/image";

export default function Tap({
  name,
  icon,
  onClickTap,
  isActivate = false,
}: {
  name: string;
  icon: string;
  isActivate?: boolean;
  onClickTap: (name: string) => void;
}) {
  return (
    <div
      onClick={() => onClickTap(name)}
      data-active={isActivate}
      className="flex gap-2 cursor-pointer justify-center items-center w-[309px] h-[101px] data-[active=true]:text-[#170F49] hover:text-[#170F49] text-[#A0A3BD]"
    >
      <div className="w-10 h-10 bg-primary-cta/10  rounded-xl flex justify-center items-center relative">
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="h-7 w-7 object-contain"
        />
      </div>
      <p className="font-bold text-sm">{name}</p>
    </div>
  );
}
