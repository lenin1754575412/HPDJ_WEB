type RoomCardProps = {
  image: string;
  title: string;
  capacity: string;
  size: string;
  roomNumber: string;
  type?: string;
  services: string[];
};

export function RoomCard({
  image,
  title,
  capacity,
  size,
  roomNumber,
  services,
}: RoomCardProps) {
  const message = encodeURIComponent(`Hola, quiero reservar la ${title} ${roomNumber}`);

  return (
    <article className="overflow-hidden rounded-3xl border border-[#B58A4F]/35 bg-[#1b1612] shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1612] via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-xl border border-[#B58A4F]/40 bg-[#1b1612]/90 px-4 py-2 font-bold text-[#D8B17A]">
          {roomNumber}
        </span>
      </div>

      <div className="p-7">
        <h3 className="mb-4 font-serif text-3xl font-bold text-[#F7EAD2]">
          {title}
        </h3>

        <div className="mb-5 flex flex-wrap gap-5 text-sm font-semibold text-[#D8B17A]">
          <span>👥 {capacity}</span>
          <span>📐 {size}</span>
        </div>

        <ul className="mb-7 space-y-3">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-3 text-[#F2E7D0]">
              <span className="text-[#D8B17A]">●</span>
              {service}
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/51999999999?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] px-6 py-4 text-center font-bold text-white shadow-lg shadow-[#B58A4F]/25 transition hover:scale-[1.02]"
        >
          Reservar ahora
        </a>
      </div>
    </article>
  );
}