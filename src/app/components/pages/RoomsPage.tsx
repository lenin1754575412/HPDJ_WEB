import { useMemo, useState } from "react";

type Category = "Todas" | "Individual" | "Doble" | "Matrimonial" | "MÃºltiple";

const filters: Category[] = ["Todas", "Individual", "Doble", "Matrimonial", "MÃºltiple"];

const rooms = [
  {
    number: "01",
    category: "Matrimonial",
    image: "/habitaciones/habitacion1.webp",
    people: "2 personas",
    features: ["1 cama de 2 plazas", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "02",
    category: "Doble",
    image: "/habitaciones/habitacion2.webp",
    people: "2 personas",
    features: ["2 camas de 1 1/2 plaza", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "04",
    category: "MÃºltiple",
    image: "/habitaciones/habitacion4.webp",
    people: "5 personas",
    features: ["5 camas de 1 1/2 plaza", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "06",
    category: "Matrimonial",
    image: "/habitaciones/habitacion6.webp",
    people: "2 personas",
    features: ["1 cama de 2 plazas", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "07",
    category: "Matrimonial",
    image: "/habitaciones/habitacion7.webp",
    people: "2 personas",
    features: ["1 cama de 2 plazas", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "08",
    category: "Matrimonial",
    image: "/habitaciones/habitacion10.webp",
    people: "2 personas",
    features: ["1 cama de 2 plazas", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "09",
    category: "Individual",
    image: "/habitaciones/habitacion11.webp",
    people: "1 persona",
    features: ["1 cama de 1 1/2 plaza", "BaÃ±o compartido", "Cable y WiFi"],
  },
  {
    number: "10",
    category: "Matrimonial",
    image: "/habitaciones/habitacion12.webp",
    people: "2 personas",
    features: ["1 cama de 2 plazas", "BaÃ±o compartido", "Cable y WiFi"],
  },
  {
    number: "11",
    category: "MÃºltiple",
    image: "/habitaciones/habitacion10.webp",
    people: "4 personas",
    features: ["3 camas de 1 1/2 plaza", "1 cama de 2 plazas", "BaÃ±o propio", "Cable y WiFi"],
  },
  {
    number: "12",
    category: "Individual",
    image: "/habitaciones/habitacion12.webp",
    people: "1 persona",
    features: ["1 cama de 1 1/2 plaza", "BaÃ±o compartido", "Cable y WiFi"],
  },
];

export function RoomsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todas");

  const filteredRooms = useMemo(() => {
    if (activeFilter === "Todas") return rooms;
    return rooms.filter((room) => room.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-[#0c0906] px-5 py-24 text-[#F2E7D0]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#D8B17A]">
            Habitaciones disponibles
          </p>

          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            Habitaciones
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-sm text-[#F2E7D0]/75 md:text-base">
            Hospedaje PerÃº Tours - Jr. Arequipa NÂ° 213, CelendÃ­n, Cajamarca.
            TelÃ©fono: 976017025.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#D8B17A] bg-[#D8B17A] text-white shadow-lg shadow-[#D8B17A]/25"
                  : "border-[#B58A4F]/30 bg-[#15110d] text-[#F2E7D0] hover:border-[#D8B17A] hover:text-[#D8B17A]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredRooms.map((room) => (
            <article
              key={room.number}
              className="group overflow-hidden rounded-[24px] border border-[#B58A4F]/35 bg-[#15110d] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B17A] hover:shadow-2xl hover:shadow-[#D8B17A]/20"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={`HabitaciÃ³n ${room.number}`}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-xl bg-[#171411]/95 px-4 py-2 text-[0.9rem] font-semibold text-[#D8B17A]">
                  Hab. {room.number}
                </span>
              </div>

              <div className="p-5">
                <h2 className="font-serif text-[1.05rem] md:text-[1.2rem] font-semibold leading-tight text-[#FFF3DF]">
                  HabitaciÃ³n {room.category}
                </h2>

                <p className="mt-2 text-[0.95rem] font-semibold text-[#D8B17A]">
                  ðŸ‘¥ {room.people}
                </p>

                <ul className="mt-5 space-y-2 text-[0.95rem] font-medium text-[#F2E7D0]">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D8B17A] text-[10px] font-bold text-[#15110d]">
                        âœ“
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/51976017025?text=Hola, quiero consultar disponibilidad de la HabitaciÃ³n ${room.number}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#C4934F] to-[#E3B76E] px-5 py-3 text-[0.95rem] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Reservar ahora
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#B58A4F]/35 bg-[#15110d] p-6 text-center shadow-xl">
          <h2 className="font-serif text-[1.05rem] md:text-[1.2rem] font-semibold leading-tight text-[#D8B17A]">
            Cochera
          </h2>

          <p className="mt-2 text-sm text-[#F2E7D0]/80">
            Disponible para motos y camionetas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RoomsPage;
