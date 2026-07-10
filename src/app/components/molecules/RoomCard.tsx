import { Check, MessageCircle, Ruler, Users } from "lucide-react";

type RoomCardProps = {
  roomNumber?: string;
  number?: string;
  title?: string;
  name?: string;
  type?: string;
  image?: string;
  imageUrl?: string;
  people?: string;
  persons?: string;
  capacity?: string;
  size?: string;
  area?: string;
  features?: string[];
  amenities?: string[];
};

export function RoomCard(props: RoomCardProps) {
  const roomNumber = props.roomNumber || props.number || "01";
  const title = props.title || props.name || "Habitación";
  const people = props.people || props.persons || props.capacity || "2 personas";
  const size = props.size || props.area || "12 m2";
  const features = props.features || props.amenities || [
    "Cama matrimonial",
    "Baño privado con ducha",
    "WiFi gratuito",
    "Agua caliente 24h",
  ];

  const cleanNumber = String(roomNumber).replace(/\D/g, "") || "1";
  const image =
    props.image ||
    props.imageUrl ||
    `/habitaciones/habitacion${Number(cleanNumber)}.webp`;

  const whatsappText = encodeURIComponent(
    `Hola, quiero reservar la ${title} - Hab. ${roomNumber}`
  );

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#B58A4F]/35 bg-[#171411]/85 shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.025] hover:border-[#E7C27D]/80 hover:shadow-[0_25px_70px_rgba(181,138,79,0.35)]">
      <div className="relative h-[240px] overflow-hidden rounded-t-[28px] bg-[#201a14]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-55" />

        <span className="absolute left-6 top-6 rounded-2xl bg-[#171411]/90 px-5 py-3 text-[15px] font-bold text-[#E7C27D] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D8B17A] group-hover:text-[#171411]">
          Hab. {roomNumber}
        </span>
      </div>

      <div className="p-6 transition-all duration-500 group-hover:bg-[#1d1812]">
        <h3 className="mb-5 font-serif text-[30px] md:text-[34px] font-bold leading-tight text-[#FFF3DD] transition-all duration-500 group-hover:text-[#E7C27D]">
          {title}
        </h3>

        <div className="mb-6 flex flex-wrap gap-5 text-[15px] font-bold text-[#E7C27D]">
          <span className="flex items-center gap-2">
            <Users size={16} /> {people}
          </span>
          <span className="flex items-center gap-2">
            <Ruler size={16} /> {size}
          </span>
        </div>

        <ul className="mb-8 space-y-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-[16px] text-[#F2E7D0]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E7C27D] text-[#171411]">
                <Check size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/51999999999?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#D8B17A] px-5 py-3 text-[16px] font-bold text-white shadow-lg transition-all duration-500 hover:scale-[1.04] hover:bg-[#E7C27D] hover:text-[#171411] hover:shadow-[0_15px_40px_rgba(216,177,122,0.45)]"
        >
          <MessageCircle size={18} />
          Reservar ahora
        </a>
      </div>
    </article>
  );
}

export default RoomCard;

