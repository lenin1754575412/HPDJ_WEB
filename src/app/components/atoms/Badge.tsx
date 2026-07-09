interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#B58A4F] to-[#D8B17A] text-white',
    secondary: 'bg-[#2A2520] text-[#D8B17A] border border-[#B58A4F]/30',
    success: 'bg-[#B58A4F]/20 text-[#D8B17A]',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
