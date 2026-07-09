import { useState } from "react";
import { FaCoffee, FaUtensils, FaClock, FaLeaf } from "react-icons/fa";
import { MdLocalCafe, MdLocalDrink, MdBreakfastDining } from "react-icons/md";
import { LazyImage } from "../atoms/LazyImage";

const fallback = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop";

const menuCategories = [
  {
    name: "CafÃƒÂ©s",
    icon: MdLocalCafe,
    items: [
      { name: "CafÃƒÂ© Americano", description: "CafÃƒÂ© negro suave y aromÃƒÂ¡tico", image: "/cafeteria/cafe-americano.jpg" },
      { name: "Capuchino", description: "Espresso con leche espumada", image: "/cafeteria/capuchino.jpg" },
      { name: "Latte", description: "CafÃƒÂ© con leche cremosa", image: "/cafeteria/latte.jpg" },
      { name: "CafÃƒÂ© Especial", description: "PreparaciÃƒÂ³n especial de la casa", image: "/cafeteria/cafe-especial.jpg" },
    ],
  },
  {
    name: "Bebidas calientes",
    icon: FaCoffee,
    items: [
      { name: "Chocolate caliente", description: "Cremoso y reconfortante", image: "/cafeteria/chocolate-caliente.jpg" },
      { name: "TÃƒÂ© e Infusiones", description: "Variedad de hierbas y sabores", image: "/cafeteria/te.jpg" },
      { name: "Avena caliente", description: "Nutritiva y reconfortante", image: "/cafeteria/avena.jpg" },
      { name: "Manzanilla", description: "InfusiÃƒÂ³n relajante", image: "/cafeteria/manzanilla.jpg" },
    ],
  },
  {
    name: "Bebidas frÃƒÂ­as",
    icon: MdLocalDrink,
    items: [
      { name: "Bebidas frÃƒÂ­as", description: "Refrescos y gaseosas heladas", image: "/cafeteria/bebidas-frias.jpg" },
      { name: "CafÃƒÂ© frÃƒÂ­o", description: "CafÃƒÂ© sobre hielo, refrescante", image: "/cafeteria/cafe-frio.jpg" },
      { name: "Limonada", description: "Fresca y natural", image: "/cafeteria/limonada.jpg" },
    ],
  },
];

export function CafeteriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCategories =
    selectedCategory === "Todos"
      ? menuCategories
      : menuCategories.filter((c) => c.name === selectedCategory);

  return (
    <div className="min-h-screen bg-[#171411]">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="/cafeteria/cafeteria-principal.jpg"
            alt="CafeterÃƒÂ­a H Peru Tours"
            fallback="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/80 via-[#171411]/75 to-[#171411]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-[#B58A4F]/30">
              <MdLocalCafe className="text-white" size={40} />
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-serif text-[#F2E7D0] mb-6">
            CafeterÃƒÂ­a
          </h1>

          <p className="text-xl text-[#F2E7D0]/80 max-w-3xl mx-auto leading-relaxed">
            Disfruta de cafÃƒÂ©s, bebidas calientes, jugos naturales, postres, sÃƒÂ¡ndwiches y deliciosos acompaÃƒÂ±amientos en un ambiente cÃƒÂ³modo, familiar y acogedor.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: FaClock, title: "Horario", sub: "Lun Ã¢â‚¬â€œ Dom", val: "6:00 AM Ã¢â‚¬â€œ 11:00 PM" },
              { icon: FaCoffee, title: "CafÃƒÂ©s y bebidas", sub: "Preparados al momento", val: "con amor" },
              { icon: FaLeaf, title: "Ambiente familiar", sub: "Espacio cÃƒÂ³modo", val: "para compartir" },
            ].map(({ icon: Icon, title, sub, val }) => (
              <div key={title} className="bg-[#2A2520]/80 backdrop-blur-sm p-6 rounded-xl border border-[#B58A4F]/20">
                <Icon className="text-[#D8B17A] mx-auto mb-3" size={32} />
                <h3 className="text-[#F2E7D0] font-serif mb-2">{title}</h3>
                <p className="text-[#F2E7D0]/70 text-sm">{sub}</p>
                <p className="text-[#D8B17A]">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MenÃƒÂº */}
      <section className="py-24 bg-gradient-to-b from-[#2A2520] to-[#171411]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D8B17A] tracking-[0.3em] uppercase text-sm">Nuestro MenÃƒÂº</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4">
              Sabores que Inspiran
            </h2>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedCategory("Todos")}
              className={`px-5 py-2.5 rounded-xl text-sm font-serif transition-all duration-300 border ${selectedCategory === "Todos"
                  ? "bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white border-transparent shadow-lg shadow-[#B58A4F]/20"
                  : "bg-[#171411] text-[#F2E7D0]/70 border-[#B58A4F]/20 hover:border-[#B58A4F]/50 hover:text-[#F2E7D0]"
                }`}
            >
              Todos
            </button>
            {menuCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-serif transition-all duration-300 border ${selectedCategory === category.name
                      ? "bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white border-transparent shadow-lg shadow-[#B58A4F]/20"
                      : "bg-[#171411] text-[#F2E7D0]/70 border-[#B58A4F]/20 hover:border-[#B58A4F]/50 hover:text-[#F2E7D0]"
                    }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Tarjetas */}
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-lg flex items-center justify-center">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-serif text-[#D8B17A]">{category.name}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group bg-[#2A2520] rounded-xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B58A4F]/20 overflow-hidden hover:-translate-y-2"
                    >
                      <div className="relative h-44 overflow-hidden bg-[#1C1815]">
                        <LazyImage
                          src={item.image}
                          alt={item.name}
                          fallback={fallback}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-serif text-[#F2E7D0] mb-1 group-hover:text-[#D8B17A] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[#F2E7D0]/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SecciÃƒÂ³n inferior */}
      <section className="py-24 bg-[#2A2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#B58A4F]/20 h-96">
              <LazyImage
                src="/cafeteria/cafeteria-ambiente.jpg"
                alt="Ambiente CafeterÃƒÂ­a"
                fallback="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent" />
            </div>
            <div className="space-y-6">
              <span className="text-[#D8B17A] tracking-[0.3em] uppercase text-sm">Un lugar especial</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0]">
                CafÃƒÂ© y TradiciÃƒÂ³n
              </h2>
              <p className="text-[#F2E7D0]/70 text-lg leading-relaxed">
                Nuestra cafeterÃƒÂ­a ofrece un ambiente tranquilo y acogedor donde puedes disfrutar de una buena taza de cafÃƒÂ©, jugos naturales, postres artesanales y sÃƒÂ¡ndwiches frescos, ideales para comenzar el dÃƒÂ­a o disfrutar en cualquier momento.
              </p>
              <ul className="space-y-3">
                {[
                  "CafÃƒÂ©s preparados al momento",
                  "Jugos y batidos naturales",
                  "Postres y dulces artesanales",
                  "Desayunos completos",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#F2E7D0]/80">
                    <div className="w-2 h-2 rounded-full bg-[#B58A4F]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
