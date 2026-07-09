import { FaMountain, FaHotel, FaCar } from 'react-icons/fa';
import { ServiceCard } from '../molecules/ServiceCard';

export function Services() {
  const services = [
    {
      icon: FaMountain,
      title: 'Tours Guiados',
      description: 'Descubre los destinos mÃƒÂ¡s atractivos de CelendÃƒÂ­n con hermosas vistas que te llevarÃƒÂ¡n a travÃƒÂ©s de experiencias inolvidables.',
    },
    {
      icon: FaHotel,
      title: 'Hospedaje Comodo',
      description: 'Disfruta de habitaciones con todas las comodidades para hacer tu estadÃƒÂ­a perfecta.',
    },
    {
      icon: FaCar,
      title: 'Transporte TurÃƒÂ­stico',
      description: 'Viaja con total comodidad y seguridad en vehÃƒÂ­culos de ÃƒÂºltima generaciÃƒÂ³n con conductores profesionales.',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-[#171411] to-[#2A2520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D8B17A] tracking-[0.3em] uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4">
            Experiencias DiseÃƒÂ±adas para Ti
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
