import ListOfEducation from "./ListOfEducation";

export default function EducationSection() {
  return (
    <section className="flex flex-col items-center w-full mt-16 mb-7">
      <div className="mb-7">
        <p className="title">Formación profesional</p>
        <p className="sub-title">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <ListOfEducation />
    </section>
  );
}
