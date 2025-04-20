// components/ui/FeatureCard.tsx
'use client';

import { FC, ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: 'amber' | 'pink' | 'green' | 'blue' | 'purple';
}

// Color mapping for card backgrounds
const colorMap = {
  amber: 'bg-amber-200',
  pink: 'bg-pink-200',
  green: 'bg-green-200',
  blue: 'bg-blue-200',
  purple: 'bg-purple-200',
};

// Color mapping for icon circles
const iconColorMap = {
  amber: 'bg-pink-300',
  pink: 'bg-green-300',
  green: 'bg-blue-300',
  blue: 'bg-purple-300',
  purple: 'bg-amber-300',
};

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = 'amber',
}) => {
  const bgColor = colorMap[color] || colorMap.amber;
  const iconBgColor = iconColorMap[color] || iconColorMap.amber;

  return (
    <div
      className={`${bgColor} rounded-xl p-8 relative overflow-hidden`}
      style={{
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        border: '2px solid black',
      }}
    >
      <div className='relative mb-6'>
        {/* Circle with 3D effect */}
        <div
          className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center`}
          style={{
            boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
            border: '2px solid black',
          }}
        >
          {icon}
        </div>
      </div>

      <h3 className='text-2xl font-bold mb-4'>{title}</h3>

      <p className='mb-2 text-gray-800'>{description}</p>
    </div>
  );
};

export default FeatureCard;
