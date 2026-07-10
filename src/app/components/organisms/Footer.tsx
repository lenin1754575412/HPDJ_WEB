export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#B58A4F]/20 bg-[#120f0c] px-5 py-10 text-[#F2E7D0]">
      <div className="mx-auto max-w-7xl text-center">
        <img
          src="/logo_hostal.png"
          alt="Hospedaje Perú Tours"
          className="mx-auto mb-4 h-20 w-auto object-contain"
        />

        <h2 className="mb-2 font-serif text-3xl font-bold text-[#D8B17A]">
          Hospedaje Perú Tours
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-[#F2E7D0]/80">
          Hospedaje en Celendín, Cajamarca. Habitaciones cómodas, atención cálida y servicios pensados para tu descanso.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-5 text-sm font-semibold">
          <a href="#/inicio" className="hover:text-[#D8B17A]">Inicio</a>
          <a href="#/habitaciones" className="hover:text-[#D8B17A]">Habitaciones</a>
          <a href="#/tours" className="hover:text-[#D8B17A]">Tours</a>
          <a href="#/nosotros" className="hover:text-[#D8B17A]">Nosotros</a>
          <a href="#/cafeteria" className="hover:text-[#D8B17A]">Cafetería</a>
          <a href="#/contacto" className="hover:text-[#D8B17A]">Contacto</a>
        </div>

        <p className="text-sm text-[#F2E7D0]/60">
          © {year} Hospedaje Perú Tours. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
