import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export default function Card({ image, title, category }: CardProps) {
  return (
    <div className="w-[370px] min-h-[320px] rounded-[36px] border border-[#EDEBFF] bg-[#F9FAFB] overflow-hidden">
      <div className="rounded-[32px]">
        <Image src={image} width={370} height={320} alt="project" />
      </div>
      <div className="flex gap-3 p-2">
        <div className="h-8 w-8 bg-[#D9D9D9] rounded-full"></div>
        <div>
          <p className="font-bold text-base">{title}</p>
          <p className="text-[#00000080]/50">{category}</p>
        </div>
      </div>
    </div>
  );
}
