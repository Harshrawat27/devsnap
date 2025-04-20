// components/sections/Pricing.tsx
'use client';

import React, { FC } from 'react';
import { Check } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { pricingTiers } from '@/data';

// Define the specific tier IDs as a type
type TierId = 'free' | 'pro' | 'enterprise';

// Define the color mapping with proper typing
const colorMap: Record<TierId, { bg: string; buttonColor: string }> = {
  free: {
    bg: 'bg-blue-200',
    buttonColor: 'blue',
  },
  pro: {
    bg: 'bg-amber-200',
    buttonColor: 'amber',
  },
  enterprise: {
    bg: 'bg-pink-200',
    buttonColor: 'pink',
  },
};

const Pricing: FC = () => {
  return (
    <section className='py-16 bg-white' id='pricing'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16'>Pricing</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {pricingTiers.map((tier) => {
            // Get the color styling based on tier ID or use default
            // Use type assertion to tell TypeScript that tier.id is a valid TierId
            // or use a default if it's not in our mapping
            const tierId = tier.id as TierId;
            const colorStyle =
              tierId in colorMap ? colorMap[tierId] : colorMap.free;

            return (
              <div
                key={tier.id}
                className={`${colorStyle.bg} rounded-xl p-8 relative ${
                  tier.highlighted ? 'transform md:-translate-y-4' : ''
                }`}
                style={{
                  boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                  border: '2px solid black',
                  transition: 'transform 0.3s ease',
                }}
              >
                {tier.highlighted && (
                  <div
                    className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-300 px-4 py-1 rounded-lg'
                    style={{
                      boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                      border: '2px solid black',
                    }}
                  >
                    <span className='font-bold text-sm'>POPULAR</span>
                  </div>
                )}

                <h3 className='text-2xl font-bold mb-2'>{tier.name}</h3>
                <div className='mb-4'>
                  <span className='text-3xl font-bold'>{tier.price}</span>
                  {tier.id !== 'enterprise' && (
                    <span className='text-gray-800'>/month</span>
                  )}
                </div>
                <p className='text-gray-800 mb-6'>{tier.description}</p>

                <ul className='space-y-3 mb-8'>
                  {tier.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <div
                        className='bg-white rounded-full p-1 mr-3 mt-1 flex-shrink-0'
                        style={{ border: '1px solid black' }}
                      >
                        <Check size={16} className='text-green-600' />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <AnimatedButton
                  href={tier.buttonLink}
                  color={
                    colorStyle.buttonColor as
                      | 'amber'
                      | 'pink'
                      | 'green'
                      | 'blue'
                      | 'purple'
                  }
                  className='w-full text-center'
                >
                  {tier.buttonText}
                </AnimatedButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
