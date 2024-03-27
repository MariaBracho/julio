import Image from "next/image";

export default function EducationCard() {
  return (
    <div className="w-[581px] h-28 p-6 flex justify-between bg-primary-content border border-primary-border rounded-2xl">
      <div className="flex gap-3">
        <div className="grid place-content-center h-5 w-6 rounded-md bg-white border border-primary-border">
          <Image
            src="/icons/circles-icons.svg"
            alt="education icon"
            width={24}
            height={20}
          />
        </div>
        <div>
          <p className="text-base font-bold text-primary-text">
            Product Design | Platzi
          </p>
          <p className="text-secondary-text text-base">
            Octubre 2021 - Actualidad
          </p>
        </div>
      </div>
      <div className="flex gap-3 h-6 items-center">
        <Image
          src="/icons/check-circle.svg"
          alt="check icon"
          width={24}
          height={24}
        />
        <div>
          <p className="text-lg font-semibold">2024</p>
        </div>
      </div>
    </div>
  );
}
