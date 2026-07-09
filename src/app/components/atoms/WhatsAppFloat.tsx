import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        @keyframes wa-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .wa-bounce { animation: wa-bounce 2.5s ease-in-out infinite; }
        .wa-pulse-ring { animation: wa-pulse-ring 2s ease-out infinite; }
        .wa-pulse-ring-delay { animation: wa-pulse-ring 2s ease-out infinite 0.7s; }
      `}</style>

      <a
        href={`https://wa.me/51900245939?text=${encodeURIComponent(
          "Hola, me gustarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a consultar disponibilidad y reservar una habitaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      >
        {/* Etiqueta */}
        <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-[#171411] border border-[#25D366]/30 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-xl whitespace-nowrap pointer-events-none">
          Reservar por WhatsApp
        </span>

        {/* BotÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n */}
        <div className="relative flex-shrink-0 wa-bounce">
          {/* Anillos de pulso */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] wa-pulse-ring"></span>
          <span className="absolute inset-0 rounded-full bg-[#25D366] wa-pulse-ring-delay"></span>

          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group-hover:shadow-[#25D366]/70 group-hover:scale-110 transition-transform duration-300">
            <FaWhatsapp className="text-white" size={28} />
          </div>
        </div>
      </a>
    </>
  );
}