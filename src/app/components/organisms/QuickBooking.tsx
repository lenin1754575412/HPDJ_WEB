import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBed,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";

export function QuickBooking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");

  const handleSearch = () => {
    const msg = `Hola, quiero consultar disponibilidad:
- Entrada: ${checkIn || "por confirmar"}
- Salida: ${checkOut || "por confirmar"}
- Huéspedes: ${guests}
- Habitación: ${roomType || "cualquier tipo"}`;

    const encodedMsg = encodeURIComponent(msg);

    window.open(
      `https://wa.me/51900245939?text=${encodedMsg}`,
      "_blank",
    );
  };

  return (
    <section className="relative z-20 mt-8 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Glow exterior */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B58A4F]/20 to-[#D8B17A]/20 rounded-3xl blur-2xl -z-10"></div>

        <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#2A2520]/95 to-[#1C1815]/95 border border-[#B58A4F]/30 rounded-3xl shadow-2xl shadow-[#171411]/60 p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-lg flex items-center justify-center flex-shrink-0">
              <FaBed className="text-white" size={14} />
            </div>
            <div>
              <h3 className="text-[#F2E7D0] font-serif text-2rem">
                Reserva rapida
              </h3>
              <p className="text-[#F2E7D0]/70 text-1.5rem">
                Consulta por una habitacion libre en tiempo real
                por WhatsApp
              </p>
            </div>
          </div>

          {/* Campos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {/* Fecha entrada */}
            <div className="relative group">
              <label className="block text-[#D8B17A] text-xs mb-2 tracking-wide uppercase">
                Fecha de entrada
              </label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B58A4F]"
                  size={14}
                />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/25 rounded-xl text-[#F2E7D0] text-sm focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all hover:border-[#B58A4F]/50 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Fecha salida */}
            <div className="relative group">
              <label className="block text-[#D8B17A] text-xs mb-2 tracking-wide uppercase">
                Fecha de salida
              </label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B58A4F]"
                  size={14}
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/25 rounded-xl text-[#F2E7D0] text-sm focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all hover:border-[#B58A4F]/50 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Huéspedes */}
            <div>
              <label className="block text-[#D8B17A] text-xs mb-2 tracking-wide uppercase">
                Huéspedes
              </label>
              <div className="relative">
                <FaUsers
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B58A4F]"
                  size={14}
                />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/25 rounded-xl text-[#F2E7D0] text-sm focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all hover:border-[#B58A4F]/50 appearance-none [color-scheme:dark]"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option
                      key={n}
                      value={String(n)}
                      className="bg-[#1C1815]"
                    >
                      {n} {n === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tipo de habitación */}
            <div>
              <label className="block text-[#D8B17A] text-xs mb-2 tracking-wide uppercase">
                Tipo de habitación
              </label>
              <div className="relative">
                <FaBed
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B58A4F]"
                  size={14}
                />
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/25 rounded-xl text-[#F2E7D0] text-sm focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all hover:border-[#B58A4F]/50 appearance-none [color-scheme:dark]"
                >
                  <option value="" className="bg-[#1C1815]">
                    Cualquier tipo
                  </option>
                  <option
                    value="Simple"
                    className="bg-[#1C1815]"
                  >
                    Habitación Individual
                  </option>
                  <option
                    value="Doble"
                    className="bg-[#1C1815]"
                  >
                    Habitación Doble
                  </option>
                  <option
                    value="Matrimonial"
                    className="bg-[#1C1815]"
                  >
                    Habitación Matrimonial
                  </option>
                  <option
                    value="Multiple"
                    className="bg-[#1C1815]"
                  >
                    Habitación Multiple
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-[#F2E7D0]/70 text-1.5rem">
              La disponibilidad se confirma directamente con el
              hospedaje
            </p>
            <button
              onClick={handleSearch}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-3.5 rounded-xl font-medium overflow-hidden shadow-xl shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaWhatsapp size={18} />
                Consultar disponibilidad
                <FaSearch size={14} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8B17A] to-[#B58A4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}