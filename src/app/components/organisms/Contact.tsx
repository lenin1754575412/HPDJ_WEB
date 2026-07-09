import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { IoSend } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#171411] via-[#1C1815] to-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 text-[#D8B17A] tracking-[0.3em] uppercase text-xs font-medium border border-[#B58A4F]/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-[#171411]/30 shadow-lg shadow-[#B58A4F]/10">
              <span className="w-2 h-2 rounded-full bg-[#D8B17A]"></span>
              Contacto
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#F2E7D0] mt-4 mb-6">
            Cominza tu Aventura
          </h2>
          <p className="text-lg text-[#F2E7D0]/70 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para hacer realidad el viaje de tus sueños. Contáctanos y te ayudaremos a planificar tu estadía perfecta.
          </p>
        </div>

        {/* Cards de contacto */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl blur-sm opacity-30"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center shadow-lg">
                  <HiMail className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-[#F2E7D0] font-serif text-lg mb-2">Email</h4>
                <a href="mailto:efrain.alalys@gmail.com" className="text-[#D8B17A] hover:text-[#B58A4F] transition-colors text-sm break-all">
                  efrain.alalys@gmail.com
                </a>
                <p className="text-[#F2E7D0]/60 text-xs mt-2">Respuesta en 24 horas</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl blur-sm opacity-30"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center shadow-lg">
                  <FaWhatsapp className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-[#F2E7D0] font-serif text-lg mb-2">WhatsApp</h4>
                <a href="https://wa.me/51900245939" target="_blank" rel="noopener noreferrer" className="text-[#D8B17A] hover:text-[#B58A4F] transition-colors text-base">
                  900 245 939
                </a>
                <p className="text-[#F2E7D0]/60 text-xs mt-2">Chat directo disponible</p>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl blur-sm opacity-30"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center shadow-lg">
                  <HiLocationMarker className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-[#F2E7D0] font-serif text-lg mb-2">Ubicación</h4>
                <p className="text-[#D8B17A] text-base">Jr. Arequipa 213</p>
                <p className="text-[#F2E7D0]/60 text-xs mt-2">Celendín, Cajamarca, Perú</p>
              </div>
            </div>
          </div>

          {/* Horario */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-br from-[#2A2520] to-[#1C1815] rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl blur-sm opacity-30"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-xl flex items-center justify-center shadow-lg">
                  <HiClock className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-[#F2E7D0] font-serif text-lg mb-2">Horario</h4>
                <p className="text-[#D8B17A] text-base">Lunes - Domingo</p>
                <p className="text-[#F2E7D0]/60 text-xs mt-2">6:00 AM - 10:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario centrado */}
        <div className="flex justify-center mb-12">
          <div className="relative group w-full max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-3xl opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] p-8 lg:p-10 rounded-3xl border border-[#B58A4F]/20 shadow-2xl space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif text-[#F2E7D0] mb-2">Envíanos un Mensaje</h3>
                <p className="text-[#F2E7D0]/60 text-sm">Completa el formulario y te responderemos pronto</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F2E7D0] mb-2 text-sm font-medium">Nombre Completo</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Juan Pérez"
                    className="w-full px-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/20 rounded-xl text-[#F2E7D0] placeholder-[#F2E7D0]/30 focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#F2E7D0] mb-2 text-sm font-medium">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+51 900 245 939"
                    className="w-full px-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/20 rounded-xl text-[#F2E7D0] placeholder-[#F2E7D0]/30 focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#F2E7D0] mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/20 rounded-xl text-[#F2E7D0] placeholder-[#F2E7D0]/30 focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-[#F2E7D0] mb-2 text-sm font-medium">Mensaje</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Cuéntanos sobre tu viaje ideal, fechas de tu estadía, número de personas..."
                  className="w-full px-4 py-3 bg-[#171411]/60 border border-[#B58A4F]/20 rounded-xl text-[#F2E7D0] placeholder-[#F2E7D0]/30 focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/30 transition-all resize-none"
                ></textarea>
              </div>

              {/* Feedback */}
              {status === 'success' && (
                <div className="flex items-center gap-3 bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 px-4 py-3 rounded-xl text-sm">
                  <FiCheckCircle size={18} />
                  ¡Mensaje enviado! Te responderemos pronto.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-rose-900/30 border border-rose-500/30 text-rose-300 px-4 py-3 rounded-xl text-sm">
                  <FiAlertCircle size={18} />
                  Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative group/btn bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white px-8 py-4 rounded-xl font-medium overflow-hidden shadow-2xl shadow-[#B58A4F]/30 hover:shadow-[#B58A4F]/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <FiLoader size={20} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <IoSend size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D8B17A] to-[#B58A4F] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Mapa al pie */}
        <div className="flex justify-center">
          <div className="relative group w-230">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#B58A4F]/20 shadow-2xl h-110">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.2446438679178!2d-78.14826374368374!3d-6.868805784873176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cd04c4828b67%3A0x160cdf180f2fa70b!2sPERU%20TOURS%20HOSPEDAJE!5e0!3m2!1ses-419!2spe!4v1778517630692!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación PERU TOURS HOSPEDAJE"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
