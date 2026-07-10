import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: "Habitaciones", path: "/habitaciones" },
    { name: "Tours", path: "/tours" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Cafetería", path: "/cafeteria" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#171411]/95 backdrop-blur-md shadow-lg shadow-[#B58A4F]/10"
        : "bg-[#171411]/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/inicio"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo_hostal.png"
              alt="H PERU TOURS"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* MenÃº de Escritorio (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group ${location.pathname === item.path
                  ? "text-[#D8B17A]"
                  : "text-[#F2E7D0]"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#B58A4F] transition-all duration-300 ${location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* BotÃ³n de MenÃº Hamburguesa MÃ³vil */}
          <button
            className="lg:hidden text-[#D8B17A] p-2 z-50"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <HiX size={28} />
            ) : (
              <HiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* MenÃº Desplegable Lateral MÃ³vil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 right-0 w-1/2 h-[calc(100vh-5rem)] bg-[#2A2520]/85 backdrop-blur-md border-l border-[#B58A4F]/20 shadow-2xl transition-all duration-300">
          <nav className="px-6 py-8 flex flex-col items-end space-y-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[#F2E7D0] hover:text-[#D8B17A] transition-colors py-1 relative group w-fit text-right text-base font-medium ${location.pathname === item.path
                  ? "text-[#D8B17A]"
                  : ""
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#B58A4F] transition-all duration-300 ${location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}