import { TourCard } from "../molecules/TourCard";

export function Tours() {
  const tours = [
    {
      image:
        "https://www.dronestagr.am/wp-content/uploads/2015/12/cristo-celendin.jpg",
      title: "Mirador San Isidro / Mirador Gelig ",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
        "snack",
      ],
    },
    {
      image:
        "https://llaqtawasitours.com/wp-content/uploads/2025/06/Velo-de-la-novia-02.jpg",
      title: "Velo de la Novia",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
      ],
    },
    {
      image:
        "https://www.chullostravelperu.com/blog/wp-content/uploads/2023/04/AGUAS-TERMALES-DE-LLANGUAT-O-BANOS-DE-ZENDAMAL.jpg",
      title: "Piscinas Papayal",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
      ],
    },
    {
      image:
        "https://www.chullostravelperu.com/blog/wp-content/uploads/2023/04/AGUAS-TERMALES-DE-LLANGUAT-O-BANOS-DE-ZENDAMAL.jpg",
      title: " Aguas Termales de Llanguat",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/05/f6/0c/05f60c734f17364306b1156fbb2b5f51.jpg",
      title: "Cataratas de Saraus",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
      ],
    },
    {
      image:
        "https://static.wixstatic.com/media/f25e49_bcde595778aa4985a011bddba01b7b7f~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f25e49_bcde595778aa4985a011bddba01b7b7f~mv2.jpg",
      title: "Circuito CelendÃƒÆ’Ã‚Â­n, Jose Galvez, Sucre, Jorge Chavez",
      includes: [
        "Transporte turistico",
        "Hospedaje",
        "Comidas y bebidas",
        "GuÃƒÆ’Ã‚Â­a turÃƒÆ’Ã‚Â­stico",
        "FotografÃƒÆ’Ã‚Â­as / videos del recorrido",
      ],
    },
  ];

  return (
    <section id="tours" className="py-24 bg-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D8B17A] tracking-[0.3em] uppercase text-sm">
            Paquetes Grupales
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4">
            Paquetes completos para descubrir y disfrutar
          </h2>
          <p className="text-[#F2E7D0]/70 mt-4 max-w-2xl mx-auto">
            No se trata solo de visitar lugares, sino de vivir
            experiencias que transformen cada aventura en una
            historia para contar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}