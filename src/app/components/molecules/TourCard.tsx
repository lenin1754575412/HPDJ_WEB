import { FaStar, FaHome } from 'react-icons/fa';
import { LazyImage } from '../atoms/LazyImage';

interface TourCardProps {
  image: string;
  title: string;
  includes?: string[];
  isPopular?: boolean;
}

export function TourCard({ image, title, includes = [] }: TourCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl overflow-hidden border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#171411]/50 hover:shadow-[#B58A4F]/20">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

      <div className="relative">
        {/* Imagen */}
        <div className="relative overflow-hidden h-72">

          <LazyImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/30 to-transparent"></div>

          {/* Badge tipo de tour */}
          <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-[#171411]/80 border border-[#B58A4F]/30 px-4 py-2 rounded-xl shadow-lg">
            <span className="text-[#D8B17A] text-xs font-medium">Paquete Grupal</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative p-6 space-y-4">
          {/* TÃƒÆ’Ã‚Â­tulo */}
          <h3 className="text-xl lg:text-2xl font-serif text-[#F2E7D0] group-hover:text-[#D8B17A] transition-colors leading-tight">
            {title}
          </h3>

          {/* Incluye */}
          {includes && includes.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-[#D8B17A] text-sm font-medium">
                <FaHome size={14} />
                <span>Incluye:</span>
              </div>
              <ul className="space-y-2">
                {includes.map((item, index) => (
                  <li key={index} className="text-[#F2E7D0]/60 text-sm flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#B58A4F] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* BotÃƒÆ’Ã‚Â³n */}
          <div className="pt-4 border-t border-[#B58A4F]/20">
            <a
              href={`https://wa.me/51900245939?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20el%20paquete%20${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn w-full bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-6 py-3 rounded-xl font-medium overflow-hidden shadow-lg shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
            >
              <span className="relative z-10">Consultar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8B17A] to-[#B58A4F] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
