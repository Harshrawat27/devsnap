// components/layout/Header.tsx
'use client';

import { useState, FC } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logo animation handlers - manually applying the same effect for non-button elements
  const handleMouseOver = (e: any) => {
    e.currentTarget.style.transform = 'translate(4px, 4px)';
    e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 1)';
  };

  const handleMouseOut = (e: any) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
    e.currentTarget.style.boxShadow = '3px 3px 0px 0px rgba(0, 0, 0, 1)';
  };

  return (
    <header className='sticky w-[100%] top-0 z-50 bg-white border-b-2 border-black'>
      {/* <div className='container mx-auto px-4 py-4 flex justify-between items-center'> */}
      <div className='container mx-auto px-4 py-4 flex justify-center items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <div
            className='bg-[#8976ea] px-4 py-2 rounded-lg flex items-center'
            style={{
              boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
              transition: 'all 0.2s ease',
              transform: 'translate(0, 0)',
              position: 'relative',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span className='text-xl font-bold text-black'>DevSnap</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className='hidden md:flex space-x-6'>
          <Link
            href='#features'
            className='text-gray-800 hover:text-orange-500 font-medium'
            style={{
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            Features
          </Link>
          <Link
            href='#how-it-works'
            className='text-gray-800 hover:text-orange-500 font-medium'
            style={{
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            How It Works
          </Link>
          <Link
            href='/pricing'
            className='text-gray-800 hover:text-orange-500 font-medium'
            style={{
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
            }}
          >
            Pricing
          </Link>
        </nav> */}

        {/* <div className='hidden md:flex space-x-4'>
          <AnimatedButton href='/login' color='pink'>
            End of year
          </AnimatedButton>
          <AnimatedButton href='/signup' color='amber'>
            Join Waitlist
          </AnimatedButton>
        </div> */}

        {/* Mobile menu button */}
        {/* <button
          className='md:hidden bg-green-200 p-2 rounded-lg'
          onClick={toggleMenu}
          style={{
            boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
            border: '2px solid black',
            transition: 'all 0.2s ease',
            transform: 'translate(0, 0)',
            position: 'relative',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className='md:hidden bg-white py-6 px-6 mx-4 mb-4 rounded-xl shadow-md'
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            border: '2px solid black',
          }}
        >
          <nav className='flex flex-col space-y-4'>
            {/* <Link
              href='#features'
              className='text-gray-800 hover:text-orange-500 font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href='#how-it-works'
              className='text-gray-800 hover:text-orange-500 font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href='#pricing'
              className='text-gray-800 hover:text-orange-500 font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link> */}
            {/* <div className='flex flex-col space-y-3 pt-3 border-t-2 border-black mt-2'>
              <AnimatedButton
                href='/login'
                color='pink'
                onClick={() => setIsMenuOpen(false)}
              >
                End of Year
              </AnimatedButton>
              <AnimatedButton
                href='/signup'
                color='amber'
                onClick={() => setIsMenuOpen(false)}
              >
                Join waitlist
              </AnimatedButton>
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
