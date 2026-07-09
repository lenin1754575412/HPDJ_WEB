import { HiWifi } from 'react-icons/hi';
import { FaCoffee, FaUtensils, FaDumbbell, FaWind, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Hospedaje() {
  const benefits = [
    { icon: HiWifi, text: 'WiFi de alta velocidad' },
    { icon: FaCoffee, text: 'Desayuno gourmet incluido' },
    { icon: FaUtensils, text: 'CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a y snacks' },
    { icon: FaDumbbell, text: 'Gimnasio y spa' },
    { icon: FaWind, text: 'Aire acondicionado' },
    { icon: FaCheck, text: 'Servicio de conserjerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a 24/7' },
  ];

  return (
    <section id="hospedaje" className="py-24 bg-gradient-to-b from-[#2A2520] to-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#B58A4F]/20">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
                alt="Hospedaje Premium"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] p-8 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-white text-4xl font-serif mb-2">Lujo</p>
              <p className="text-white/90">en cada detalle</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-[#D8B17A] tracking-[0.3em] uppercase text-sm">Hospedaje Premium</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4">
                Descansa con Elegancia
              </h2>
              <p className="text-[#F2E7D0]/70 mt-4 text-lg leading-relaxed">
                Experimenta el confort absoluto en nuestros hoteles cuidadosamente seleccionados.
                Cada establecimiento ofrece servicios de clase mundial y comodidades excepcionales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3 p-4 bg-[#2A2520] rounded-lg border border-[#B58A4F]/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-white" size={20} />
                  </div>
                  <span className="text-[#F2E7D0] text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/habitaciones"
              className="inline-block bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:scale-105"
            >
              Ver Habitaciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
