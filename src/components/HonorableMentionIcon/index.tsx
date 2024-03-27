import Image from "next/image";

export default function HonorableMentionIcon() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="h-4 w-16 relative">
        <Image src="/icons/platzi-icon.svg" alt="platzi" fill />
      </div>
      <div className="h-[30.5px] w-[0.5px] bg-black" />
      <div className="h-7 w-20 relative">
        <Image src="/icons/torres-burriel-icon.svg" alt="torres-burriel" fill />
      </div>
    </div>
  );
}
