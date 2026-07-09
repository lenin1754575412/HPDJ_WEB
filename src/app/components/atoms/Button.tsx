import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg transition-all duration-300 flex items-center gap-2 justify-center';

  const variants = {
    primary: 'bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white hover:shadow-2xl hover:shadow-[#B58A4F]/50 hover:scale-105',
    secondary: 'bg-[#2A2520] text-[#D8B17A] border border-[#B58A4F]/20 hover:border-[#B58A4F]/50',
    outline: 'border-2 border-[#B58A4F] text-[#D8B17A] hover:bg-[#B58A4F]/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} />}
    </button>
  );
}
