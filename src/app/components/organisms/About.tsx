import { FaEye, FaBullseye, FaStar } from "react-icons/fa";
import { HiClock } from "react-icons/hi";

export function About() {
  return (
    <section
      id="nosotros"
      className="py-12 sm:py-16 bg-gradient-to-b from-[#2A2520] to-[#171411]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-7">
            <div>
              <span className="text-[#D8B17A] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">
                Nuestra historia
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4 leading-tight">
                <span className="block sm:hidden">
                  Donde el Descanso se Convierte en Experiencia
                </span>

                <span className="hidden sm:block">
                  Donde el Descanso se Convierte en Experiencia
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-[#F2E7D0]/70 leading-7 text-sm sm:text-base">
              <p>
                <span className="text-[#D8B17A] font-serif text-lg sm:text-xl">
                  H PERU TOURS
                </span>{" "}
                naciÃ³ de la pasiÃ³n por mostrar al mundo las
                maravillas del Perú. Desde hace mÃ¡s de una
                dÃ©cada, nos especializamos en crear experiencias
                premium que combinan la riqueza cultural de
                nuestro paÃ­s con el confort y la elegancia que
                nuestros huÃ©spedes merecen.
              </p>

              <p>
                Nuestro equipo de profesionales altamente
                capacitados trabaja incansablemente para diseÃ±ar
                paquetes turÃ­sticos exclusivos que incluyen
                hospedaje de lujo, gastronomÃ­a de clase mundial
                y tours guiados por expertos que conocen cada
                rincÃ³n mÃ¡gico del Perú.
              </p>

              <p>
                Creemos que cada viaje debe ser una historia
                Ãºnica. Por eso, nos enfocamos en grupos
                reducidos y atención personalizada, asegurando
                que cada detalle supere tus expectativas.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#B58A4F]/20 h-56 sm:h-64">
              <img
                src="/nosotros/hospedaje.jpg"
                alt="Hospedaje H Peru Tours"
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[#F2E7D0] font-serif text-lg sm:text-xl leading-tight">Nuestro Hospedaje</p>
                <p className="text-[#D8B17A] text-sm">Comodidad en el corazón de Celendín</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#B58A4F]/20 h-56 sm:h-64">
              <img
                src="/cafeteria/cafeteria-principal.jpg"
                alt="Cafetería H Peru Tours"
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[#F2E7D0] font-serif text-lg sm:text-xl leading-tight">Nuestra Cafetería</p>
                <p className="text-[#D8B17A] text-sm">Sabores peruanos autÃ©nticos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 space-y-10 sm:space-y-16">
          <div className="text-center">
            <span className="text-[#D8B17A] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">
              Nuestro PropÃ³sito
            </span>

            <h2 className="text-[2.15rem] sm:text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4 leading-tight max-w-[330px] sm:max-w-none mx-auto">
              <span className="block sm:hidden">
                MisiÃ³n, VisiÃ³n
                <br />y Valores
              </span>

              <span className="hidden sm:block">
                MisiÃ³n, VisiÃ³n y Valores
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#2A2520] to-[#171411] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B58A4F]/20 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B58A4F]/30">
                <FaBullseye className="text-white" size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#D8B17A] mb-4">
                MisiÃ³n
              </h3>

              <p className="text-[#F2E7D0]/75 leading-7 text-sm sm:text-base lg:text-lg">
                Somos un hospedaje que brinda a nuestros
                huÃ©spedes una estancia inolvidable, basada en la
                comodidad, hospitalidad, calidad, seguridad y
                cultura local, creando una conexiÃ³n autÃ©ntica
                con Celendín y sus alrededores. Nos esforzamos
                por superar las expectativas de nuestros
                clientes, promoviendo el desarrollo turÃ­stico y
                econÃ³mico de la comunidad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2A2520] to-[#171411] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B58A4F]/20 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B58A4F]/30">
                <FaEye className="text-white" size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#D8B17A] mb-4">
                VisiÃ³n
              </h3>

              <p className="text-[#F2E7D0]/75 leading-7 text-sm sm:text-base lg:text-lg">
                Ser el hospedaje de referencia en Celendín,
                reconocido por ofrecer experiencias Ãºnicas, con
                un servicio personalizado, excelencia en calidad
                y un compromiso sostenible con el entorno y la
                innovaciÃ³n continua, impulsando el turismo
                responsable en la regiÃ³n.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2A2520] to-[#171411] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B58A4F]/20 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B58A4F]/30">
                <FaStar className="text-white" size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#D8B17A] mb-4">
                Valores
              </h3>

              <p className="text-[#F2E7D0]/75 leading-7 text-sm sm:text-base lg:text-lg">
                Integridad, VocaciÃ³n de servicio, Respeto,
                Trabajo en equipo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2A2520] to-[#171411] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B58A4F]/20 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B58A4F]/30">
                <HiClock className="text-white" size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#D8B17A] mb-4">
                Horario de atención
              </h3>

              <p className="text-[#F2E7D0]/75 leading-7 text-sm sm:text-base lg:text-lg">
                Las 24 horas, sÃ¡bados y domingos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}