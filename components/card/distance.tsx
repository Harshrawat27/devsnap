// components/DistanceCard.jsx
import React from 'react';

const DistanceCard = () => {
  return (
    <div className='relative w-72 h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-red-500 to-black'>
      {/* Card Content */}
      <div className='p-6 flex flex-col h-full'>
        {/* Header */}
        <div className='flex justify-between items-start'>
          <h2 className='text-white text-xl font-bold'>Any Distance</h2>
          <span className='text-gray-300 text-xs tracking-wider'>RECAP</span>
        </div>

        {/* Main Text - Positioned in the lower third */}
        <div className='mt-auto mb-20'>
          <p className='text-white text-2xl font-medium'>
            You&apos;ve been in it for the
            <br />
            long haul
          </p>
        </div>
      </div>

      {/* Wave Pattern at bottom */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 200'
          className='w-full'
          preserveAspectRatio='none'
        >
          {/* Generate multiple wave lines with slight variations */}
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M0,${100 + i * 10} C300,${80 + i * 5} 600,${
                110 + i * 2
              } 1440,${90 + i * 5} V200 H0 Z`}
              fill='none'
              stroke='rgba(255, 0, 0, 0.5)'
              strokeWidth='1'
              strokeOpacity={0.3 + i * 0.07}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default DistanceCard;
