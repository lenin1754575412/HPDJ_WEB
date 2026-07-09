import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      <div className="relative bg-gradient-to-br from-[#2A2520] to-[#1C1815] p-8 rounded-2xl border border-[#B58A4F]/20 hover:border-[#B58A4F]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#171411]/50 hover:shadow-[#B58A4F]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F]/0 to-[#B58A4F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative">
          {/* Icono */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#B58A4F] to-[#D8B17A] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-[#B58A4F]/30">
              <Icon className="text-white" size={36} />
            </div>
          </div>

          <h3 className="text-2xl font-serif text-[#F2E7D0] group-hover:text-[#D8B17A] transition-colors mb-4">
            {title}
          </h3>

          <p className="text-[#F2E7D0]/70 leading-relaxed text-base">
            {description}
          </p>

          {/* Decoración inferior */}
          <div className="mt-6 pt-6 border-t border-[#B58A4F]/20">
            <div className="flex items-center gap-2 text-[#D8B17A] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Descubre más</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
