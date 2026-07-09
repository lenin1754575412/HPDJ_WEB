import { useState } from "react";
import { RoomCard } from "../molecules/RoomCard";

type RoomFilter = "Todas" | "Individual" | "Doble" | "Matrimonial" | "Multiple";

const filters: { label: string; value: RoomFilter }[] = [
  { label: "Todas", value: "Todas" },
  { label: "Individual", value: "Individual" },
  { label: "Doble", value: "Doble" },
  { label: "Matrimonial", value: "Matrimonial" },
  { label: "M\u00faltiple", value: "Multiple" },
];

const rooms = [
  {
    image: "/habitaciones/hab-01.png",
    title: "Habitaci\u00f3n Matrimonial",
    capacity: "2 personas",
    size: "12 m\u00b2",
    price: "",
    roomNumber: "Hab. 01",
    type: "Matrimonial",
    services: ["Cama Matrimonial", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-02.png",
    title: "Habitaci\u00f3n Doble",
    capacity: "2 personas",
    size: "15 m\u00b2",
    price: "",
    roomNumber: "Hab. 02",
    type: "Doble",
    services: ["Cama Doble", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-03.png",
    title: "Habitaci\u00f3n Individual",
    capacity: "1 persona",
    size: "8 m\u00b2",
    price: "",
    roomNumber: "Hab. 03",
    type: "Individual",
    services: ["Cama individual", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-04.png",
    title: "Habitaci\u00f3n M\u00faltiple",
    capacity: "3 - 5 personas",
    size: "29 m\u00b2",
    price: "",
    roomNumber: "Hab. 04",
    type: "Multiple",
    services: ["Varias camas c\u00f3modas", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-05.png",
    title: "Habitaci\u00f3n Doble",
    capacity: "2 personas",
    size: "15 m\u00b2",
    price: "",
    roomNumber: "Hab. 05",
    type: "Doble",
    services: ["Cama Doble", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-06.png",
    title: "Habitaci\u00f3n Matrimonial",
    capacity: "2 personas",
    size: "11,5 m\u00b2",
    price: "",
    roomNumber: "Hab. 06",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-07.png",
    title: "Habitaci\u00f3n Matrimonial",
    capacity: "2 personas",
    size: "10 m\u00b2",
    price: "",
    roomNumber: "Hab. 07",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-08.png",
    title: "Habitaci\u00f3n Matrimonial",
    capacity: "2 personas",
    size: "10 m\u00b2",
    price: "",
    roomNumber: "Hab. 08",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-09.png",
    title: "Habitaci\u00f3n Doble",
    capacity: "2 personas",
    size: "15 m\u00b2",
    price: "",
    roomNumber: "Hab. 09",
    type: "Doble",
    services: ["Cama Doble", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-10.png",
    title: "Habitaci\u00f3n Matrimonial",
    capacity: "2 personas",
    size: "10 m\u00b2",
    price: "",
    roomNumber: "Hab. 10",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Sin ba\u00f1o", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-11.png",
    title: "Habitaci\u00f3n M\u00faltiple",
    capacity: "3 - 5 personas",
    size: "25 m\u00b2",
    price: "",
    roomNumber: "Hab. 11",
    type: "Multiple",
    services: ["Varias camas c\u00f3modas", "Ba\u00f1o privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/hab-12.png",
    title: "Habitaci\u00f3n Individual",
    capacity: "1 persona",
    size: "5 m\u00b2",
    price: "",
    roomNumber: "Hab. 12",
    type: "Individual",
    services: ["Cama individual", "Sin ba\u00f1o", "WiFi gratuito", "Agua caliente 24h"],
  },
];

export function Rooms() {
  const [filter, setFilter] = useState<RoomFilter>("Todas");

  const filteredRooms =
    filter === "Todas" ? rooms : rooms.filter((room) => room.type === filter);

  return (
    <section className="relative bg-[#120f0c] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#D8B17A]">
            Habitaciones
          </p>
          <h2 className="mb-4 font-serif text-5xl font-bold text-[#F7EAD2]">
            Comodidad para Todos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#F2E7D0]/75">
            Elige la habitaci\u00f3n ideal para tu descanso con atenci\u00f3n c\u00e1lida y servicios pensados para tu comodidad.
          </p>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-xl px-7 py-4 text-base font-bold transition-all duration-300 ${
                filter === item.value
                  ? "scale-105 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white shadow-lg shadow-[#B58A4F]/30"
                  : "border border-[#B58A4F]/30 bg-[#171411]/70 text-[#F2E7D0] hover:bg-[#B58A4F]/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard key={room.roomNumber} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}