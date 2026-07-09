import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiClock,
} from "react-icons/hi";
import { Link } from "react-router-dom";
<img
  src="/logo_hostal.png"
  alt="H PERU TOURS"
  className="h-20 w-auto object-contain"
/>

export function Footer() {
  const links = [
    { name: "Inicio", path: "/inicio" },
    { name: "Habitaciones", path: "/habitaciones" },
    { name: "Tours", path: "/tours" },
    { name: "GalerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a", path: "/galeria" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "CafeterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a", path: "/cafeteria" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <footer className="bg-[#171411] border-t border-[#B58A4F]/20">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-col justify-evenly">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link
              to="/inicio"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo_hostal.png"
                alt="H PERU TOURS"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-[#F2E7D0]/70 text-sm leading-relaxed">
              Creando experiencias inolvidables en el corazÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n
              del PerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âº desde hace mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s de 10 aÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os.
            </p>
          </div>

          <div>
            <h4 className="text-[#D8B17A] font-serif mb-4">
              Enlaces RÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡pidos
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#F2E7D0]/70 hover:text-[#D8B17A] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#D8B17A] font-serif mb-4">
              Destinos Populares
            </h4>
            <ul className="space-y-2">
              {[
                "Mirador Cristo Redentor",
                "Velo de la Novia",
                "BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os Termales de Jeres/HuasmÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n",
                "Aguas Termales de Llanguat",
                "Cataratas el Cornello",
                "Laguna de Sorococha",
                "Y otros destinos fascinantes",
              ].map((destination) => (
                <li key={destination}>
                  <Link
                    to="/tours"
                    className="text-[#F2E7D0]/70 hover:text-[#D8B17A] transition-colors text-sm"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#D8B17A] font-serif mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <HiLocationMarker
                  className="text-[#B58A4F] flex-shrink-0 mt-0.5"
                  size={18}
                />
                <div>
                  <p className="text-[#F2E7D0]/70 text-sm">
                    Jr. Arequipa 213
                  </p>
                  <p className="text-[#F2E7D0]/70 text-sm">
                    CelendÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <HiPhone
                  className="text-[#B58A4F] flex-shrink-0 mt-0.5"
                  size={18}
                />
                <div>
                  <a
                    href="tel:076615354"
                    className="text-[#F2E7D0]/70 hover:text-[#D8B17A] transition-colors text-sm block"
                  >
                    (076) 615354
                  </a>
                  <a
                    href="https://wa.me/51900245939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B58A4F] hover:text-[#D8B17A] transition-colors text-xs"
                  >
                    WhatsApp: 900 245 939
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <HiMail
                  className="text-[#B58A4F] flex-shrink-0 mt-0.5"
                  size={18}
                />
                <a
                  href="mailto:efrain.alalys@gmail.com"
                  className="text-[#F2E7D0]/70 hover:text-[#D8B17A] transition-colors text-sm"
                >
                  efrain.alalys@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <HiClock
                  className="text-[#B58A4F] flex-shrink-0 mt-0.5"
                  size={18}
                />
                <div>
                  <p className="text-[#F2E7D0]/70 text-sm">
                    Lun - Dom
                  </p>
                  <p className="text-[#D8B17A] text-sm">
                    24 Horas
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#B58A4F]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F2E7D0]/60 text-sm">
            ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 2026 H PERU TOURS. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            {[
              {
                Icon: FaFacebook,
                href: "https://www.facebook.com/profile.php?id=61560950963130",
                label: "Facebook",
              },
              {
                Icon: FaInstagram,
                href: "#",
                label: "Instagram",
              },
              { Icon: FaTiktok, href: "#", label: "TikTok" },
              {
                Icon: FaWhatsapp,
                href: `https://wa.me/51900245939?text=${encodeURIComponent(
                  "Hola, me gustarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a que me brindaran informaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n de sus habitaciones libres",
                )}`,
                label: "WhatsApp",
              },
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={
                  href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={label}
                className="w-10 h-10 bg-[#2A2520] border border-[#B58A4F]/20 rounded-lg flex items-center justify-center text-[#D8B17A] hover:bg-gradient-to-br hover:from-[#B58A4F] hover:to-[#D8B17A] hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}