import Image from "next/image";

export default function Tap({
  name,
  icon,
  onClickTap,
}: {
  name: string;
  icon: string;
  onClickTap: (name: string) => void;
}) {
  return (
    <div
      onClick={() => onClickTap(name)}
      className="flex gap-2 cursor-pointer justify-center items-center w-[309px] h-[101px] focus:text-[#170F49] text-[#A0A3BD]"
    >
      <div className="w-10 h-10 bg-primary-cta/10  rounded-xl flex justify-center items-center relative">
        <Image src={icon} alt="icon" width={23} height={23} />
      </div>
      <p className="font-bold text-sm">{name}</p>
    </div>
  );
}
