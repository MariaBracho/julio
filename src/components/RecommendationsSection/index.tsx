import ListOfRecommendations from "./ListOfRecommendations";

export default function RecommendationsSection() {
  return (
    <section className="w-full flex flex-col items-center my-12">
      <div className="mb-16">
        <p className="title">Lo que dicen otros profesionales</p>
        <p className="sub-title">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <ListOfRecommendations />
    </section>
  );
}
