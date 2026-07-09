import { FaUsers, FaBed, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { LazyImage } from "../atoms/LazyImage";

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

export function RoomCard({
  image,
  title,
  capacity,
  size,
  price,
  roomNumber,
  services = [],
}: RoomCardProps) {
  const whatsappMsg = `Hola, quiero reservar una ${title} (${roomNumber}). \u00bfPueden confirmar disponibilidad y precio?`;
  const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[#B58A4F]/35 bg-[#171411] shadow-xl shadow-black/30">
      <div className="relative h-[310px] overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          fallback="/hero-pasillo-web.png"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-[#171411]/25 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-[#B58A4F]/45 bg-[#171411]/80 px-4 py-2 text-sm font-bold text-[#D8B17A] backdrop-blur">
          {roomNumber}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 font-serif text-3xl font-bold text-[#F7EAD2]">
          {title}
        </h3>

        <div className="mb-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#D8B17A]">
          <span className="flex items-center gap-2">
            <FaUsers /> {capacity}
          </span>
          <span className="flex items-center gap-2">
            <FaBed /> {size}
          </span>
          <span>{price}</span>
        </div>

        <div className="mb-6 space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3 text-[#F2E7D0]">
              <FaCheckCircle className="text-[#D8B17A]" />
              <span>{service}</span>
            </div>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] px-5 py-4 font-bold text-white shadow-lg shadow-[#B58A4F]/25 transition hover:scale-[1.02]"
        >
          <FaWhatsapp />
          Reservar ahora
        </a>
      </div>
    </div>
  );
}