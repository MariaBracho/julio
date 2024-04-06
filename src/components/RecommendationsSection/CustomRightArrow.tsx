import Image from "next/image";

export default function CustomRightArrow({
  isRight = true,
  onClick,
}: {
  isRight?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      data-isright={isRight}
      onClick={onClick}
      className="z-50 absolute data-[isright=false]:left-0 right-0 data-[isright=false]:rotate-0  rotate-180"
    >
      <Image
        src="/icons/arrow-grey.svg"
        alt="arrow right"
        width={32}
        height={32}
      />
    </button>
  );
}
