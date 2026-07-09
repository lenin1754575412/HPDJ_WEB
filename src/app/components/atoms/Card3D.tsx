import { ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glow';
}

export function Card3D({ children, className = '', variant = 'default' }: Card3DProps) {
  const variants = {
    default: 'card-3d shadow-3d',
    elevated: 'card-3d elevated-3d shadow-3d',
    glow: 'card-3d shadow-3d glow-3d shine-3d',
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
