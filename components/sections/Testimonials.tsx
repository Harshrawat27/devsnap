// components/sections/Testimonials.tsx
'use client';

import React, { FC } from 'react';
import { testimonials } from '@/data';

// Define available colors for testimonial cards
const cardColors = [
  'bg-green-200',
  'bg-blue-200',
  'bg-pink-200',
  'bg-amber-200',
  'bg-purple-200',
  'bg-red-200',
  'bg-indigo-200',
  'bg-orange-200',
  'bg-teal-200',
  'bg-cyan-200',
];

// Function to get a non-adjacent color
const getNonAdjacentColor = (prevColor: string, nextColor: string): string => {
  // Filter out the previous and next colors to avoid adjacency
  const availableColors = cardColors.filter(
    (color) => color !== prevColor && color !== nextColor
  );

  // Pick a random color from the available options
  return availableColors[Math.floor(Math.random() * availableColors.length)];
};

// Function to generate colors for all testimonials ensuring no adjacent matches
const generateNonAdjacentColors = (count: number): string[] => {
  const colors: string[] = [];

  // Initialize with first color
  colors.push(cardColors[Math.floor(Math.random() * cardColors.length)]);

  // Generate remaining colors with non-adjacency constraint
  for (let i = 1; i < count; i++) {
    // Get the color to the left (or null if it's the first in a row)
    const leftColor = i % 3 === 0 ? null : colors[i - 1];

    // Get the color above (or null if it's in the first row)
    const aboveColor = i >= 3 ? colors[i - 3] : null;

    // Use non-adjacent function based on constraints
    colors.push(getNonAdjacentColor(leftColor || '', aboveColor || ''));
  }

  return colors;
};

const Testimonials: FC = () => {
  // Generate colors for all testimonials (assuming at least 10)
  const cardColorArray = generateNonAdjacentColors(
    Math.max(testimonials.length, 10)
  );

  return (
    <section
      className='py-16'
      style={{
        background: 'linear-gradient(to right, #f9fafb, #f3f4f6, #f9fafb)',
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
      }}
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16'>
          Why Developers <span className='text-orange-500'>❤️</span> Us
        </h2>

        <div className='columns-1 md:columns-2 lg:columns-3 mt-12'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${cardColorArray[index]} p-6 rounded-xl relative overflow-hidden mb-5`}
              style={{
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                border: '2px solid black',
              }}
            >
              <blockquote className='text-gray-800 mb-6 font-medium'>
                "{testimonial.quote}"
              </blockquote>

              <div className='flex items-center'>
                <div
                  className='w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4'
                  style={{
                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                    border: '2px solid black',
                  }}
                >
                  <span className='text-gray-800 text-lg font-bold'>
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className='font-bold'>{testimonial.author}</p>
                  <p className='text-gray-800 text-sm'>
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 grid md:grid-cols-3 gap-6 text-center'>
          <div
            className='p-6 rounded-xl bg-amber-200'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
            }}
          >
            <h3 className='text-2xl font-bold text-orange-600 mb-2'>90%</h3>
            <p className='text-gray-800'>
              of users report improved coding consistency
            </p>
          </div>
          <div
            className='p-6 rounded-xl bg-pink-200'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
            }}
          >
            <h3 className='text-2xl font-bold text-orange-600 mb-2'>3.5x</h3>
            <p className='text-gray-800'>
              faster skill acquisition with structured paths
            </p>
          </div>
          <div
            className='p-6 rounded-xl bg-blue-200'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
            }}
          >
            <h3 className='text-2xl font-bold text-orange-600 mb-2'>78%</h3>
            <p className='text-gray-800'>
              find more meaningful coding connections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
