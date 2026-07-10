export type Room = {
  roomNumber: string;
  title: string;
  type: string;
  people: string;
  size: string;
  image: string;
  features: string[];
};

type RoomCardProps = {
  room: Room;
};

export function RoomCard({ room }: RoomCardProps) {
  const phone = "51999999999";
  const message = encodeURIComponent(`Hola, quiero reservar la ${room.title} Hab. ${room.roomNumber}`);

  return (
    <article className="overflow-hidden rounded-[26px] border border-[#B58A4F]/35 bg-[#171411] shadow-2xl shadow-black/30">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={room.image}
          alt={`${room.title} Habitación ${room.roomNumber}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-black/10 to-transparent" />

        <span className="absolute left-6 top-6 rounded-2xl bg-[#171411] px-5 py-3 text-lg font-bold text-[#D8B17A] shadow-lg">
          Hab. {room.roomNumber}
        </span>
      </div>

      <div className="p-8">
        <h3 className="mb-5 font-serif text-4xl font-bold leading-tight text-[#FFF2D8]">
          {room.title}
        </h3>

        <div className="mb-6 flex flex-wrap gap-5 text-lg font-bold text-[#D8B17A]">
          <span>{room.people}</span>
          <span>{room.size}</span>
        </div>

        <ul className="mb-8 space-y-4 text-lg font-medium text-[#F2E7D0]">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D8B17A] text-sm font-black text-[#171411]">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-2xl bg-gradient-to-r from-[#C99651] to-[#E1B875] px-6 py-4 text-center text-lg font-bold text-white shadow-xl shadow-[#C99651]/20 transition hover:scale-[1.02]"
        >
          Reservar ahora
        </a>
      </div>
    </article>
  );
}

export default RoomCard;