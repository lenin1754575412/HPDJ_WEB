import { FaWifi, FaParking, FaUtensils, FaMapMarkedAlt, FaMobileAlt } from 'react-icons/fa';
import { MdHotTub, MdCleaningServices } from 'react-icons/md';
import { HiClock } from 'react-icons/hi';

const services = [
  {
    icon: FaWifi,
    title: 'WiFi Gratis',
    desc: 'Internet de alta velocidad en todas las habitaciones y Ã¡reas comunes sin costo adicional.',
  },
  {
    icon: MdHotTub,
    title: 'Agua Caliente',
    desc: 'Duchas con agua caliente disponible las 24 horas del dÃ­a para tu comodidad.',
  },
  {
    icon: HiClock,
    title: 'RecepciÃ³n 24h',
    desc: 'Siempre hay alguien disponible para atenderte, desde el check-in hasta emergencias.',
  },
  {
    icon: MdCleaningServices,
    title: 'Limpieza Diaria',
    desc: 'Servicio de limpieza y cambio de toallas todos los dÃ­as incluido en tu estadÃ­a.',
  },
  {
    icon: FaParking,
    title: 'Estacionamiento',
    desc: 'Estacionamiento seguro disponible para huÃ©spedes con vehÃ­culo propio. Consultar disponibilidad.',
  },
  {
    icon: FaUtensils,
    title: 'Restaurante',
    desc: 'Desayunos, almuerzos y cenas con gastronomÃ­a peruana tÃ­pica de Cajamarca.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Tours TurÃ­sticos',
    desc: 'Organizamos tours a los principales atractivos de CelendÃ­n y Cajamarca.',
  },
  {
    icon: FaMobileAlt,
    title: 'Yape / Plin',
    desc: 'Pagos digitales aceptados. TambiÃ©n efectivo. Sin complicaciones.',
  },
];

export function HospedajeServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C1815] to-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30">
              <span className="w-2 h-2 rounded-full bg-[#D8B17A]"></span>
              Lo que incluimos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4 mb-4">
            Servicios Incluidos
          </h2>
          <p className="text-lg text-[#F2E7D0]/70 max-w-2xl mx-auto">
            Todo lo que necesitas para una estadÃ­a cÃ³moda y tranquila en CelendÃ­n.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="text-white" size={20} />
                  </div>
                </div>
                <h4 className="text-[#F2E7D0] font-serif text-base mb-2">{s.title}</h4>
                <p className="text-[#F2E7D0]/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
