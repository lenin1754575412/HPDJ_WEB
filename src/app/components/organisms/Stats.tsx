import {
  HiUsers,
  HiLocationMarker,
  HiClock,
} from "react-icons/hi";
import { FaStar } from "react-icons/fa";

export function Stats() {
  const stats = [
    {
      icon: HiUsers,
      number: "+500",
      label: "Huéspedes atendidos",
    },
    {
      icon: HiClock,
      number: "24/7",
      label: "Atención disponible",
    },
    {
      icon: HiLocationMarker,
      number: "Céntrico",
      label: "Ubicación en Celendín",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#2A2520] via-[#1C1815] to-[#171411] relative overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#B58A4F]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#D8B17A]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] p-6 lg:p-8 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#171411]/50 hover:shadow-[#B58A4F]/20 text-center">
                {/* Icono */}
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl shadow-[#B58A4F]/30">
                    <stat.icon
                      className="text-white"
                      size={28}
                    />
                  </div>
                </div>

                {/* Número */}
                <p className="text-3xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] mb-6++ group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>

                {/* Label */}
                <p className="text-[#F2E7D0]/70 text-xs lg:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}