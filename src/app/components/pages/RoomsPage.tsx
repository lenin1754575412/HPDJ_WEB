import { useMemo, useState } from "react";
import {
  FaBed,
  FaUsers,
  FaRulerCombined,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

type RoomCategory =
  | "Todas"
  | "Individual"
  | "Doble"
  | "Matrimonial"
  | "Multiple";

const rooms = [
  {
    id: 1,
    number: "Hab. 01",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Matrimonial",
    category: "Matrimonial",
    people: "2 persona",
    size: "12 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-01.png",
    features: [
      "Cama Matrimonial",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 2,
    number: "Hab. 02",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Doble",
    category: "Doble",
    people: "2 persona",
    size: "15 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-02.png",
    features: [
      "Cama Doble",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privdo con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 3,
    number: "Hab. 04",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Multiple",
    category: "Multiple",
    people: "3 - 5 persona",
    size: "29 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-03.png",
    features: [
      "Varias camas comodas",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 4,
    number: "Hab. 06",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Matrimonial",
    category: "Matrimonial",
    people: "2 personas",
    size: "11.5 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-04.png",
    features: [
      "Cama matrimonial",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 5,
    number: "Hab. 07",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Matrimonial",
    category: "Matrimonial",
    people: "2 personas",
    size: "10 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-05.png",
    features: [
      "Cama matrimonial",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 6,
    number: "Hab. 08",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Matrimonial",
    category: "Matrimonial",
    people: "2 personas",
    size: "10 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-06.png",
    features: [
      "Cama matrimonial",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 7,
    number: "Hab. 10",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Matrimonial",
    category: "Matrimonial",
    people: "2 personas",
    size: "00 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-07.png",
    features: [
      "Cama matrimonial",
      "Sin baÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 8,
    number: "Hab. 11",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Multiple",
    category: "Multiple",
    people: "3 - 5 personas",
    size: "25 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-08.png",
    features: [
      "Varias camas cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³modas",
      "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
  {
    id: 9,
    number: "Hab. 12",
    title: "HabitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Individual",
    category: "Individual",
    people: "1 personas",
    size: "5 mÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²",
    image: "/habitaciones/hab-09.png",
    features: [
      "Cama individual",
      "Sin baÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
  },
];

const filters: RoomCategory[] = [
  "Todas",
  "Individual",
  "Doble",
  "Matrimonial",
  "Multiple",
];

export function RoomsPage() {
  const [activeFilter, setActiveFilter] =
    useState<RoomCategory>("Todas");

  const filteredRooms = useMemo(() => {
    if (activeFilter === "Todas") return rooms;
    return rooms.filter(
      (room) => room.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#171411] text-[#F2E7D0] pt-32 pb-24">
      {/* Fondo decorativo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B58A4F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D8B17A]/10 rounded-full blur-3xl" />
      </div>

      <section id="habitaciones" className="relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.35em] uppercase text-xs sm:text-sm font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full bg-[#171411]/60 backdrop-blur-sm mb-5">
              <FaBed size={12} />
              Habitaciones
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2E7D0] leading-tight mb-4">
              Comodidad para Todos
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#F2E7D0]/75 leading-relaxed">
              Elige la habitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n ideal para tu estadÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a en
              CelendÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n. Ambientes cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³modos, atenciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lida y
              servicios pensados para tu descanso.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-all duration-300 ${activeFilter === filter
                  ? "bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white border-transparent shadow-xl shadow-[#B58A4F]/30"
                  : "bg-[#171411]/50 text-[#F2E7D0] border-[#B58A4F]/30 hover:border-[#B58A4F] hover:bg-[#B58A4F]/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tarjetas */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <article
                key={room.id}
                className="group bg-[#211C18] border border-[#B58A4F]/25 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 hover:border-[#D8B17A]/60 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative h-56 sm:h-75 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-[#2A2520]/90 border border-[#B58A4F]/40 text-[#D8B17A] px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {room.number}
                  </span>


                </div>

                {/* InformaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n */}
                <div className="px-[24px] py-[5px]">
                  <h2 className="font-serif text-[1.5rem] sm:text-[1.7rem] text-[#F2E7D0] mb-3 leading-tight">
                    {room.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-[#D8B17A] text-xs sm:text-sm font-medium">
                    <span className="inline-flex items-center gap-2">
                      <FaUsers size={13} />
                      {room.people}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <FaRulerCombined size={13} />
                      {room.size}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {room.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#F2E7D0]/85 text-sm leading-relaxed"
                      >
                        <FaCheckCircle
                          className="text-[#D8B17A] mt-1 flex-shrink-0"
                          size={14}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/51999999999?text=Hola,%20quiero%20reservar%20la%20${encodeURIComponent(
                      room.title,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-5 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#B58A4F]/25 hover:brightness-110 transition-all duration-300"
                  >
                    <FaWhatsapp size={16} />
                    Reservar ahora
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}