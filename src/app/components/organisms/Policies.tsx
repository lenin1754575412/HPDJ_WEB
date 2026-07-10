import { HiClock, HiCheckCircle, HiInformationCircle } from 'react-icons/hi';
import { FaDog, FaMobileAlt, FaBan } from 'react-icons/fa';

const policies = [
  {
    icon: HiClock,
    title: 'Check-in',
    value: '1:00 PM',
    note: 'Desde la 1:00 PM',
  },
  {
    icon: HiClock,
    title: 'Check-out',
    value: '12:00 PM',
    note: 'Hasta el mediodÃ­a',
  },
  {
    icon: FaDog,
    title: 'Mascotas',
    value: 'Consultar',
    note: 'Preguntar disponibilidad',
  },
  {
    icon: FaBan,
    title: 'Cancelaciones',
    value: 'Flexible',
    note: 'Consultar condiciones',
  },
  {
    icon: FaMobileAlt,
    title: 'Pagos',
    value: 'Efectivo Â· Yape Â· Plin',
    note: 'Sin tarjeta de crÃ©dito',
  },
  {
    icon: HiCheckCircle,
    title: 'Fumadores',
    value: 'No permitido',
    note: 'Hospedaje libre de humo',
  },
];

export function Policies() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#1C1815] to-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-3xl opacity-10 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] border border-[#B58A4F]/20 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center flex-shrink-0">
                <HiInformationCircle className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-[#F2E7D0] font-serif text-2xl">PolÃ­ticas del hospedaje</h3>
                <p className="text-[#F2E7D0]/50 text-sm">InformaciÃ³n importante para tu estadÃ­a</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {policies.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#171411]/40 border border-[#B58A4F]/10 rounded-xl hover:border-[#B58A4F]/30 transition-colors">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#B58A4F]/30 to-[#D8B17A]/30 border border-[#B58A4F]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <p.icon className="text-[#D8B17A]" size={16} />
                  </div>
                  <div>
                    <p className="text-[#F2E7D0]/50 text-xs uppercase tracking-wide mb-0.5">{p.title}</p>
                    <p className="text-[#D8B17A] font-medium text-sm">{p.value}</p>
                    <p className="text-[#F2E7D0]/40 text-xs mt-0.5">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
