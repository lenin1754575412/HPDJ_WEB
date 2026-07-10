export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#B58A4F]/20 bg-[#0c0906] px-5 py-12 text-[#F2E7D0]">
      <div className="mx-auto max-w-7xl text-center">
        <img
          src="/logo_hostal.png"
          alt="Hospedaje PerÃº Tours"
          className="mx-auto mb-5 h-20 w-auto object-contain"
        />

        <h2 className="mb-3 font-serif text-3xl font-bold text-[#D8B17A]">
          {"Hospedaje Per\u00fa Tours"}
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-[#F2E7D0]/80">
          {"Hospedaje en Celend\u00edn, Cajamarca. Habitaciones c\u00f3modas, atenci\u00f3n c\u00e1lida y servicios pensados para tu descanso."}
        </p>

        <div className="mb-7 flex flex-wrap justify-center gap-5 text-sm font-semibold">
          <a href="#/inicio" className="hover:text-[#D8B17A]">Inicio</a>
          <a href="#/habitaciones" className="hover:text-[#D8B17A]">Habitaciones</a>
          <a href="#/tours" className="hover:text-[#D8B17A]">Tours</a>
          <a href="#/nosotros" className="hover:text-[#D8B17A]">Nosotros</a>
          <a href="#/cafeteria" className="hover:text-[#D8B17A]">CafeterÃ­a</a>
          <a href="#/contacto" className="hover:text-[#D8B17A]">Contacto</a>
        </div>

        <div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-[#B58A4F]/30 bg-[#171411] px-6 py-5 text-left shadow-lg shadow-black/20">
          <h3 className="mb-2 font-serif text-xl font-bold text-[#D8B17A]">
            Libro de Reclamaciones
          </h3>

          <p className="text-sm leading-relaxed text-[#F2E7D0]/85">
            {"Hospedaje Per\u00fa Tours cuenta con Libro de Reclamaciones f\u00edsico disponible en recepci\u00f3n, conforme a la normativa vigente."}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-[#F2E7D0]/85">
            {"Puedes solicitarlo en nuestro local: Celend\u00edn, Cajamarca - Per\u00fa."}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-[#F2E7D0]/85">
            <strong>Horario de atenciÃ³n:</strong> Lunes a domingo de 8:00 a.m. a 10:00 p.m.
          </p>
        </div>

        <p className="text-sm text-[#F2E7D0]/60">
          Â© {year} Hospedaje PerÃº Tours. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;