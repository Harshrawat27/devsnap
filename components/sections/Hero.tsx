// components/sections/Hero.tsx
'use client';

import { FC } from 'react';
import AnimatedButton from '../ui/AnimatedButton';

const Hero: FC = () => {
  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-2xl m-auto'>
          Finally, get your <span className='text-orange-600'>dev journey</span>{' '}
          right
        </h1>

        <p className='text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-10 px-4'>
          DevSnap is the platform where developers share their learning goals
          and connect with like-minded coders who are on similar paths.
        </p>

        <div className='flex flex-col sm:flex-row justify-center gap-6 mb-12'>
          <AnimatedButton href='/signup' color='amber'>
            Get Started Free
          </AnimatedButton>

          <AnimatedButton href='#how-it-works' color='blue'>
            Learn More
          </AnimatedButton>
        </div>

        <div
          className='text-sm font-medium flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 items-center bg-green-100 mx-auto max-w-lg py-3 px-6 rounded-lg'
          style={{
            boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
            border: '2px solid black',
          }}
        >
          <span className='flex items-center'>
            <svg
              className='w-5 h-5 mr-2 text-green-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              ></path>
            </svg>
            No credit card required
          </span>

          <span className='hidden sm:inline mx-1'>•</span>

          <span className='flex items-center'>
            <svg
              className='w-5 h-5 mr-2 text-green-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              ></path>
            </svg>
            Set up in minutes
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
