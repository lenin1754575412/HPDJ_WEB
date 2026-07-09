import { useState } from "react";
import { RoomCard } from "../molecules/RoomCard";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    title: "Habitación Individual",
    capacity: "1 persona",
    size: "18 m²",
    price: "S/. 60",
    services: [
      "Cama individual",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 01",
    type: "Individual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    title: "Habitación Individual",
    capacity: "1 persona",
    size: "18 m²",
    price: "S/. 60",
    services: [
      "Cama individual",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 02",
    type: "Individual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    title: "Habitación Individual",
    capacity: "1 persona",
    size: "18 m²",
    price: "S/. 60",
    services: [
      "Cama individual",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 03",
    type: "Individual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    title: "Habitación Doble",
    capacity: "2 personas",
    size: "24 m²",
    price: "S/. 90",
    services: [
      "2 camas individuales",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 04",
    type: "Doble",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    title: "Habitación Doble",
    capacity: "2 personas",
    size: "24 m²",
    price: "S/. 90",
    services: [
      "2 camas individuales",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 05",
    type: "Doble",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    title: "Habitación Doble",
    capacity: "2 personas",
    size: "24 m²",
    price: "S/. 90",
    services: [
      "2 camas individuales",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 06",
    type: "Doble",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    title: "Habitación Matrimonial",
    capacity: "2 personas",
    size: "28 m²",
    price: "S/. 100",
    services: [
      "Cama matrimonial",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 07",
    type: "Matrimonial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    title: "Habitación Matrimonial",
    capacity: "2 personas",
    size: "28 m²",
    price: "S/. 100",
    services: [
      "Cama matrimonial",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 08",
    type: "Matrimonial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    title: "Habitación Matrimonial",
    capacity: "2 personas",
    size: "28 m²",
    price: "S/. 100",
    services: [
      "Cama matrimonial",
      "Baño privado con ducha",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 09",
    type: "Matrimonial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    title: "Habitación Múltiple",
    capacity: "3-5 personas",
    size: "36 m²",
    price: "S/. 140",
    services: [
      "Camas múltiples",
      "Baño privado amplio",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 10",
    type: "Multiple",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    title: "Habitación Múltiple",
    capacity: "3-5 personas",
    size: "36 m²",
    price: "S/. 140",
    services: [
      "Camas múltiples",
      "Baño privado amplio",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 11",
    type: "Multiple",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    title: "Habitación Múltiple",
    capacity: "3-5 personas",
    size: "36 m²",
    price: "S/. 140",
    services: [
      "Camas múltiples",
      "Baño privado amplio",
      "WiFi gratuito",
      "Agua caliente 24h",
    ],
    roomNumber: "Hab. 12",
    type: "Multiple",
  },
];

export function Rooms() {
  const [filter, setFilter] = useState("Todas");

  const filteredRooms =
    filter === "Todas"
      ? rooms
      : rooms.filter((r) => r.type === filter);

  return (
    <section
      id="habitaciones"
      className="py-20 bg-gradient-to-b from-[#171411] via-[#1C1815] to-[#171411]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4 mb-4">
            Comodidad para Todos
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              "Todas",
              "Individual",
              "Doble",
              "Matrimonial",
              "Multiple",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${filter === type
                    ? "bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white shadow-lg shadow-[#B58A4F]/30 scale-105"
                    : "border border-[#B58A4F]/30 text-[#F2E7D0] hover:bg-[#B58A4F]/10 bg-[#171411]/40 backdrop-blur-sm"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1dia md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.roomNumber} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}