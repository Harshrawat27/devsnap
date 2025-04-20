// components/ui/AnimatedButton.tsx
'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  color: 'amber' | 'pink' | 'green' | 'blue' | 'purple';
  className?: string;
  onClick?: () => void;
}

// Color mapping for background colors
const colorMap = {
  amber: {
    bg: 'bg-amber-400',
    hover: 'hover:bg-amber-500',
  },
  pink: {
    bg: 'bg-pink-200',
    hover: 'hover:bg-pink-300',
  },
  green: {
    bg: 'bg-green-200',
    hover: 'hover:bg-green-300',
  },
  blue: {
    bg: 'bg-blue-200',
    hover: 'hover:bg-blue-300',
  },
  purple: {
    bg: 'bg-purple-200',
    hover: 'hover:bg-purple-300',
  },
};

const AnimatedButton: FC<AnimatedButtonProps> = ({
  href,
  children,
  color,
  className = '',
  onClick,
}) => {
  const colorClasses = colorMap[color] || colorMap.amber;

  return (
    <Link
      href={href}
      className={`
        ${colorClasses.bg} ${colorClasses.hover} 
        text-black font-bold py-2 px-4 rounded-lg
        transition-all duration-200 border-2 border-black
        ${className}
      `}
      onClick={onClick}
      style={{
        position: 'relative',
        boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        transform: 'translate(0, 0)',
        transition: 'all 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translate(4px, 4px)';
        e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0, 0, 0, 1)';
      }}
    >
      {children}
    </Link>
  );
};

export default AnimatedButton;
