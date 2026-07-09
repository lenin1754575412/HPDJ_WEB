import { ReactNode, ButtonHTMLAttributes } from 'react';

interface Button3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button3D({
  children,
  variant = 'primary',
  className = '',
  ...props
}: Button3DProps) {
  const baseStyles = 'button-3d press-3d transition-all duration-300';

  const variants = {
    primary: 'bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white glow-3d hover:shadow-2xl hover:shadow-[#B58A4F]/50',
    secondary: 'border-2 border-[#B58A4F] text-[#D8B17A] hover:bg-[#B58A4F]/10',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} px-8 py-4 rounded-lg flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
