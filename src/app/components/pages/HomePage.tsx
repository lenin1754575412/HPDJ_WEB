import {
  Hero,
  QuickBooking,
  Stats,
} from "../organisms";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaArrowRight,
  FaHotel,
  FaMapMarkedAlt,
  FaClock,
  FaConciergeBell,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Reserva rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida flotante */}
      <QuickBooking />

      {/* Stats de confianza */}
      <Stats />

      {/* Resumen de Habitaciones */}
      <section className="py-20 bg-gradient-to-b from-[#171411] to-[#1C1815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30">
                <FaHotel size={12} />
                Alojamiento
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mb-4">
              Habitaciones Confortables
            </h2>
            <p className="text-lg text-[#F2E7D0]/70 max-w-2xl mx-auto">
              Desde habitaciones individuales hasta habitaciones multiples,
              Comodas y acojeoras para que tengas el descanso que te mereces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                type: "Individual",
                price: "S/. 60",
                capacity: "1 persona",
              },
              {
                type: "Doble",
                price: "S/. 90",
                capacity: "2 personas",
              },
              {
                type: "Matrimonial",
                price: "S/. 100",
                capacity: "2 personas",
              },
              {
                type: "Multiple",
                price: "S/. 140",
                capacity: "3-5 personas",
              },
            ].map((room, i) => (
              <div
                key={i}
                className="group bg-[#2A2520] border border-[#B58A4F]/20 rounded-2xl p-6 text-center hover:border-[#B58A4F]/50 hover:shadow-2xl hover:shadow-[#B58A4F]/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaHotel className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-serif text-[#F2E7D0] mb-2">
                  {room.type}
                </h3>
                <p className="text-[#D8B17A] text-sm mb-3">
                  {room.capacity}
                </p>
                <p className="text-2xl font-serif text-[#B58A4F]">
                  {room.price}
                </p>
                <p className="text-[#F2E7D0]/70 text-1rem mt-1">
                  por noche
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/habitaciones"
              className="inline-block rounded-xl"
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:brightness-110 hover:saturate-125 transition-all duration-300 group">
                Ver todas las habitaciones
                <FaArrowRight className="transition-transform duration-300 hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resumen de Tours */}
      <section className="py-20 bg-gradient-to-b from-[#1C1815] to-[#171411]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30">
                <FaMapMarkedAlt size={12} />
                Experiencias
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mb-4">
              Tours y Paquetes
            </h2>
            <p className="text-lg text-[#F2E7D0]/75 max-w-2xl mx-auto">
              Conoce nuevos destinos y dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©janos convertir cada recorrido
              en una aventura llena de momentos inolvidables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Paquete Gocta",
                duration: "1D-2D",
                image: "/habitaciones/hab-01.png",
              },
              {
                title: "Paquete Kuelap",
                duration: "1D-2D",
                image: "/habitaciones/hab-02.png",
              },
              {
                title: "Paquete Combinado",
                duration: "1D-2D",
                image: "/habitaciones/hab-03.png",
              },
            ].map((tour, i) => (
              <div
                key={i}
                className="group relative h-72 rounded-2xl overflow-hidden border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 hover:shadow-2xl hover:shadow-[#B58A4F]/20 transition-all duration-300"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-[#171411]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#D8B17A] text-1.5rem mb-2">
                    {tour.duration}
                  </p>
                  <h3 className="text-2xl font-serif text-[#F2E7D0]">
                    {tour.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-4 rounded-xl font-medium shadow-2xl shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              Ver todos los tours
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a */}
      <section className="py-24 bg-gradient-to-br from-[#2A2520] via-[#1C1815] to-[#171411] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B58A4F]/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D8B17A]/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden border border-[#B58A4F]/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a H Peru Tours"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-lg bg-[#171411]/80 border border-[#B58A4F]/30 rounded-2xl p-5 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-serif text-[#F2E7D0] mb-1">
                          CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a
                        </p>
                        <p className="text-[#D8B17A] text-sm flex items-center gap-1.5">
                          <FaClock size={11} /> 6:00 AM ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ 10:30
                          PM
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center">
                        <FaUtensils
                          className="text-white"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-7">
              <div>
                <div className="inline-block mb-4">
                  <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30">
                    <FaUtensils size={10} />
                    Nuestra CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mb-5">
                  Sabores de Cajamarca
                </h2>
                <p className="text-lg text-[#F2E7D0]/70 leading-relaxed">
                  Disfruta de cafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s, bebidas calientes, jugos naturales, postres, sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ndwiches y deliciosos acompaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±amientos en un ambiente cÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³modo, familiar y acogedor.
                </p>
              </div>

              {/* Productos destacados */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© Premium", time: "Todo el dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a" },
                  { label: "Jugos naturales", time: "Frescos" },
                  { label: "Postres", time: "Artesanales" },
                ].map((dish, i) => (
                  <div
                    key={i}
                    className="bg-[#171411]/60 border border-[#B58A4F]/15 rounded-xl p-3 text-center hover:border-[#B58A4F]/40 transition-colors"
                  >
                    <p className="text-[#F2E7D0] text-xs font-medium mb-0.5">
                      {dish.label}
                    </p>
                    <p className="text-[#D8B17A] text-[10px]">
                      {dish.time}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {[
                  "Abierto de 6:00 AM a 11:00 PM",
                  "CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s, infusiones y bebidas calientes",
                  "Jugos, batidos y bebidas frÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as",
                  "SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡ndwiches, postres y desayunos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#F2E7D0]/70"
                  >
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/cafeteria"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-7 py-3.5 rounded-xl font-medium shadow-xl shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <FaConciergeBell size={16} />
                  Ver menÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âº
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UbicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pida */}
      <section className="py-16 bg-gradient-to-b from-[#171411] to-[#1C1815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30">
                  <HiLocationMarker size={12} />
                  CÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³mo llegar
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#F2E7D0]">
                Estamos en el centro de CelendÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n
              </h2>
              <p className="text-[#F2E7D0]/70">
                Jr. Arequipa 213, CelendÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n, Cajamarca, PerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âº. A
                pocos pasos de la Plaza de Armas y los
                principales atractivos de la ciudad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=PERU+TOURS+HOSPEDAJE+Celendin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-6 py-3.5 rounded-xl font-medium shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <HiLocationMarker size={16} />
                  CÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³mo llegar
                </a>
              </div>
            </div>
            {/* Mapa */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative h-72 rounded-2xl overflow-hidden border border-[#B58A4F]/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.2446438679178!2d-78.14826374368374!3d-6.868805784873176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cd04c4828b67%3A0x160cdf180f2fa70b!2sPERU%20TOURS%20HOSPEDAJE!5e0!3m2!1ses-419!2spe!4v1778517630692!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UbicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n PERU TOURS HOSPEDAJE"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}