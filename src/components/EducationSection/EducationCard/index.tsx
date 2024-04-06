import dayjs from "dayjs";
import Image from "next/image";

interface Props {
  logo: string | null;
  training: string | null;
  institution: string | null;
  startDate: string | null;
  endDate: string | null;
  isEducationFinish: boolean | null;
}

export default function EducationCard({
  logo,
  training,
  institution,
  startDate,
  endDate,
  isEducationFinish,
}: Props) {
  const startDateOfEducation = dayjs(startDate).locale("es").format("MMM YYYY");

  const EndtDateOfEducation = dayjs(endDate).locale("es").format("MMM YYYY");

  const yearOfEducation = dayjs(endDate).locale("es").format("YYYY");
  const currentYear = dayjs().locale("es").format("YYYY");

  const CURRENT_DATE_TEXT = "Actualidad";

  return (
    <div className="w-[581px] h-28 p-6 flex justify-between bg-primary-content border border-primary-border rounded-2xl">
      <div className="flex gap-3">
        <div className="grid place-content-center h-8 w-8 rounded-md bg-white border border-primary-border">
          <Image
            src={logo ?? ""}
            alt="education icon"
            width={24}
            height={24}
            className="h-6 w-6 object-cover"
          />
        </div>
        <div>
          <p className="text-base font-bold text-primary-text">
            {training} | {institution}
          </p>
          <p className="text-secondary-text text-base">
            {startDateOfEducation} -{" "}
            {isEducationFinish ? EndtDateOfEducation : CURRENT_DATE_TEXT}
          </p>
        </div>
      </div>
      <div className="flex gap-3 h-6 items-center">
        <Image
          src="/icons/check-circle.svg"
          alt="check icon"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <div>
          <p className="text-lg font-semibold">
            {isEducationFinish ? yearOfEducation : currentYear}
          </p>
        </div>
      </div>
    </div>
  );
}
