// components/sections/HowItWorks.tsx
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { howItWorksData } from '@/data';

const HowItWorks: FC = () => {
  return (
    <section className='py-16 bg-white' id='how-it-works'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          What&apos;s Inside
        </h2>

        <div className='mt-16 space-y-16'>
          {/* First feature - highlighted with larger card */}
          <div className='bg-pink-100 rounded-xl p-8'>
            <h3 className='text-2xl font-bold mb-6'>
              {howItWorksData[0].title}
            </h3>
            <div className='flex flex-col lg:flex-row gap-8 items-center'>
              <div className='lg:w-1/2'>
                <p className='text-gray-700 mb-6'>
                  {howItWorksData[0].description}
                </p>
                <p className='text-gray-700 mb-6'>
                  Simply share your goals or skills you want to learn, and we'll
                  generate comprehensive learning paths using prompts,
                  documents, code snippets, and more. Save time planning and
                  spend more time building.
                </p>
              </div>
              <div className='lg:w-1/2 relative h-64 w-full'>
                <Image
                  src={howItWorksData[0].imageSrc || ''}
                  alt={howItWorksData[0].title}
                  fill
                  className='object-contain rounded-lg'
                />
              </div>
            </div>
          </div>

          {/* Grid of other features */}
          <div className='grid md:grid-cols-2 gap-8'>
            {howItWorksData.slice(1).map((item) => (
              <div
                key={item.id}
                className='bg-gray-100 rounded-xl p-6 hover:shadow-md transition duration-300'
              >
                <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                <p className='text-gray-600 mb-4'>{item.description}</p>
                <div className='relative h-48 w-full'>
                  <Image
                    src={item.imageSrc || ''}
                    alt={item.title}
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/signup'
            className='inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
