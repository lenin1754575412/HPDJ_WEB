import { FaUsers, FaBed, FaWhatsapp } from 'react-icons/fa';
import { LazyImage } from '../atoms/LazyImage';

interface RoomCardProps {
  image: string;
  title: string;
  capacity: string;
  size: string;
  price: string;
  roomNumber: string;
  services?: string[];
  type?: string;
}

export function RoomCard({ image, title, capacity, size, price, roomNumber, services = [] }: RoomCardProps) {
  const whatsappMsg = `Hola, quiero reservar una ${title} (${roomNumber}). ¿Pueden confirmar disponibilidad y precio?`;

  return (
    <div className="group relative flex flex-col">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative flex flex-col bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden h-full">
        {/* Imagen */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <LazyImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent"></div>

          {/* Número de habitación */}
          <div className="absolute top-2 left-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full backdrop-blur-md bg-[#171411]/80 text-[#D8B17A] border border-[#B58A4F]/40">
              {roomNumber}
            </span>
          </div>

        </div>

        {/* Contenido */}
        <div className="p-3.5 flex flex-col flex-1">
          <h3 className="text-[#F2E7D0] font-serif text-base mb-1">{title}</h3>
          <div className="flex items-center gap-3 text-[#F2E7D0]/50 text-xs mb-2.5">
            <span className="flex items-center gap-1">
              <FaUsers size={10} className="text-[#B58A4F]" />
              {capacity}
            </span>
            <span className="flex items-center gap-1">
              <FaBed size={10} className="text-[#B58A4F]" />
              {size}
            </span>
          </div>

          {/* Servicios */}
          {services.length > 0 && (
            <ul className="space-y-0.5 mb-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[#F2E7D0]/60 text-[11px]">
                  <div className="w-1 h-1 rounded-full bg-[#D8B17A] flex-shrink-0"></div>
                  {s}
                </li>
              ))}
            </ul>
          )}

          {/* Botón reservar */}
          <div className="mt-auto pt-3 border-t border-[#B58A4F]/15">
            <a
              href={`https://wa.me/51900245939?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white py-2 rounded-xl text-xs font-medium text-center overflow-hidden shadow-lg shadow-[#B58A4F]/25 hover:shadow-[#B58A4F]/45 transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <FaWhatsapp size={12} />
                Reservar ahora
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8B17A] to-[#B58A4F] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
