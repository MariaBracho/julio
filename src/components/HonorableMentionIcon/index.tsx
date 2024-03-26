import Image from "next/image";

export default function HonorableMentionIcon() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Image src="/icons/platzi-icon.svg" alt="platzi" width={64} height={16} />
      <div className="h-[30.5px] w-[0.5px] bg-black" />
      <Image
        src="/icons/torres-burriel-icon.svg"
        alt="torres-burriel"
        width={81}
        height={28}
      />
    </div>
  );
}
