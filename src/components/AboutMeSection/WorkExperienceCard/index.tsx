export default function WorkExperienceCard() {
  return (
    <div className="w-full py-4 border-b border-black/10">
      <div className="flex justify-between">
        <p className="text-primary-text text-base font-semibold">
          UX/UI Design | Hutrit
        </p>
        <p className="text-primary-text font-medium text-base">
          Abr 2023 - Actualidad
        </p>
      </div>
      <div className="my-2">
        <p className="text-primary-text/50 line-clamp-3 text-sm">
          Me desempeñé en el área de UI/UX para la creación de varios productos
          en la empresa Hutrit.
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
