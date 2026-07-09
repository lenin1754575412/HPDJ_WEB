import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1730367019960-9906d9cbbf05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwbG9iYnklMjBlbGVnYW50fGVufDF8fHx8MTc3ODg1MTc0NHww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Hospedaje PerÃº Tours"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/95 via-[#171411]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/60 via-transparent to-[#0A0806]/20" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Etiqueta */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#D8B17A] uppercase tracking-[0.35em] text-sm">
              CelendÃ­n, Cajamarca
            </span>
            <div className="w-16 h-px bg-[#B58A4F]" />
          </div>

          {/* TÃ­tulo con animaciÃ³n */}
          <h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#F2E7D0] mb-6"
            style={{
              textShadow:
                "0 2px 5px rgba(0,0,0,0.4), 0 0 15px rgba(205,127,50,0.5), 0 0 30px rgba(184,115,51,0.3)",
            }}
          >
            Hospedaje
            <br />
            <span
              translate="no"
              className="block text-[#D8B17A] text-[clamp(4rem,15vw,7.5rem)] leading-none mt-2 whitespace-nowrap"
              style={{
                textShadow:
                  "0 2px 5px rgba(0,0,0,0.4), 0 0 15px rgba(205,127,50,0.5), 0 0 30px rgba(184,115,51,0.3)",
              }}
            >
              PerÃº Tours
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-[#F2E7D0]/70 leading-relaxed mb-10 max-w-lg">
            Hospedaje premium en el corazÃ³n de CelendÃ­n. Vive la
            magia del PerÃº con la comodidad y el lujo que
            mereces.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/habitaciones"
              className="group relative bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-4 rounded-xl font-medium overflow-hidden shadow-2xl shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Habitaciones
                <HiArrowRight size={18} />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-[#D8B17A] to-[#B58A4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/tours"
              className="border border-[#B58A4F]/50 text-[#F2E7D0] px-8 py-4 rounded-xl font-medium hover:bg-[#B58A4F]/10 hover:border-[#B58A4F] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <HiArrowRight
                size={18}
                className="text-[#D8B17A]"
              />
              Ver Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}