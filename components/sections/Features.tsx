// components/sections/Features.tsx
'use client';

import React, { FC } from 'react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { featuresData } from '@/data';

// Available color options for the 3D cards
const cardColors = {
  amber: {
    bg: 'bg-amber-200',
    border: 'border-black',
    shadow: 'rgba(0,0,0,1)',
  },
  pink: {
    bg: 'bg-pink-200',
    border: 'border-black',
    shadow: 'rgba(0,0,0,1)',
  },
  green: {
    bg: 'bg-green-200',
    border: 'border-black',
    shadow: 'rgba(0,0,0,1)',
  },
  blue: {
    bg: 'bg-blue-200',
    border: 'border-black',
    shadow: 'rgba(0,0,0,1)',
  },
  purple: {
    bg: 'bg-purple-200',
    border: 'border-black',
    shadow: 'rgba(0,0,0,1)',
  },
};

const Features: FC = () => {
  return (
    <section
      className='py-16'
      id='features'
      style={{
        background: 'linear-gradient(to right, #f9fafb, #f3f4f6, #f9fafb)',
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2
            className='inline-block text-3xl font-bold px-8 py-3 bg-blue-200 rounded-lg relative'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
            }}
          >
            Features
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {featuresData.map((item) => {
            // Use color from the item or default to amber
            const colorKey = item.colorTheme || 'amber';
            const color = cardColors[colorKey] || cardColors.amber;

            return (
              <div
                key={item.id}
                className={`${color.bg} rounded-xl p-6 relative`}
                style={{
                  boxShadow: `4px 4px 0px 0px ${color.shadow}`,
                  border: '2px solid black',
                  transition: 'transform 0.3s ease',
                }}
              >
                <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
                <p className='text-gray-800'>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className='flex flex-col sm:flex-row justify-center gap-6 mb-12 mt-20'>
          <AnimatedButton href='/signup' color='pink'>
            Sign up - for free
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Features;
