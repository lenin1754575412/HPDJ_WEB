import { useState } from "react";
import { RoomCard } from "../molecules/RoomCard";

type RoomFilter = "Todas" | "Individual" | "Doble" | "Matrimonial" | "Multiple";

const filters: { label: string; value: RoomFilter }[] = [
  { label: "Todas", value: "Todas" },
  { label: "Individual", value: "Individual" },
  { label: "Doble", value: "Doble" },
  { label: "Matrimonial", value: "Matrimonial" },
  { label: "Multiple", value: "Multiple" },
];

const rooms = [
  {
    image: "/habitaciones/habitacion1.webp",
    title: "Habitacion Matrimonial",
    capacity: "2 personas",
    size: "12 m2",
    roomNumber: "Hab. 01",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion2.webp",
    title: "Habitacion Doble",
    capacity: "2 personas",
    size: "15 m2",
    roomNumber: "Hab. 02",
    type: "Doble",
    services: ["Cama doble", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion4.webp",
    title: "Habitacion Multiple",
    capacity: "3 - 5 personas",
    size: "29 m2",
    roomNumber: "Hab. 04",
    type: "Multiple",
    services: ["Varias camas comodas", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion6.webp",
    title: "Habitacion Matrimonial",
    capacity: "2 personas",
    size: "11.5 m2",
    roomNumber: "Hab. 06",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion7.webp",
    title: "Habitacion Matrimonial",
    capacity: "2 personas",
    size: "10 m2",
    roomNumber: "Hab. 07",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion10.webp",
    title: "Habitacion Matrimonial",
    capacity: "2 personas",
    size: "10 m2",
    roomNumber: "Hab. 10",
    type: "Matrimonial",
    services: ["Cama matrimonial", "Sin bano", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion11.webp",
    title: "Habitacion Multiple",
    capacity: "3 - 5 personas",
    size: "25 m2",
    roomNumber: "Hab. 11",
    type: "Multiple",
    services: ["Varias camas comodas", "Bano privado con ducha", "WiFi gratuito", "Agua caliente 24h"],
  },
  {
    image: "/habitaciones/habitacion12.webp",
    title: "Habitacion Individual",
    capacity: "1 persona",
    size: "5 m2",
    roomNumber: "Hab. 12",
    type: "Individual",
    services: ["Cama individual", "Sin bano", "WiFi gratuito", "Agua caliente 24h"],
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
            Elige la habitacion ideal para tu estadia en Celendin. Ambientes comodos, atencion calida y servicios pensados para tu descanso.
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