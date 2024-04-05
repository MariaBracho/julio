import dayjs from "dayjs";

interface WorkExperienceCardProps {
  rol: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
  isJobFinish: boolean | null;
}

export default function WorkExperienceCard({
  rol,
  company,
  description,
  start_date,
  end_date,
  isJobFinish,
}: WorkExperienceCardProps) {
  const startDateOfJob = dayjs(start_date).locale("es").format("MMM YYYY");
  const EndtDateOfJob = dayjs(end_date).locale("es").format("MMM YYYY");

  const CURRENT_DATE_TEXT = "Actualidad";

  return (
    <div className="w-full py-4 border-b border-black/10">
      <div className="flex justify-between">
        <p className="text-primary-text text-base font-semibold">
          {rol} | {company}
        </p>
        <p className="text-primary-text font-medium text-base">
          {startDateOfJob} - {isJobFinish ? EndtDateOfJob : CURRENT_DATE_TEXT}
        </p>
      </div>
      <div className="my-2">
        <p className="text-primary-text/50 line-clamp-3 text-sm leading-normal">
          {description}
        </p>
      </div>
      <div className="w-full flex justify-end">
        <p className="text-primary-cta font-medium cursor-pointer text-sm">
          Leer más
        </p>
      </div>
    </div>
  );
}
