import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const colorClass = variant === 'white' ? 'text-white' : 'text-primary';

  return (
    <div
      className={`font-heading font-bold ${sizeClasses[size]} ${colorClass}`}
    >
      <span className="tracking-tight">Bakar's</span>
      <span className="text-secondary ml-2">Food & Catering</span>
    </div>
  );
};

export default Logo;
