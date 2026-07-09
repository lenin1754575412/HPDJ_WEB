import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#F2E7D0] mb-2">{label}</label>
      )}
      <input
        className={`w-full px-4 py-3 bg-[#2A2520] border border-[#B58A4F]/20 rounded-lg text-[#F2E7D0] placeholder-[#F2E7D0]/40 focus:border-[#B58A4F] focus:outline-none focus:ring-2 focus:ring-[#B58A4F]/20 transition-all ${className}`}
        {...props}
      />
    </div>
  );
}
