import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const colorClass = variant === 'white' ? 'text-white' : 'text-primary';

  return (
    <div
      className={`font-heading font-bold leading-tight ${sizeClasses[size]} ${colorClass}`}
    >
      <span className="tracking-tight whitespace-nowrap">Bakar's</span>
      <span className="text-secondary block sm:inline sm:ml-2 whitespace-nowrap">
        Food & Catering
      </span>
    </div>
  );
};

export default Logo;
