// components/layout/Footer.tsx
'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { footerSections } from '@/data';

const Footer: FC = () => {
  return (
    <footer className='bg-white pt-16 pb-8 border-t-2 border-black'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          {/* Logo and social links */}
          <div>
            <Link href='/' className='flex items-center space-x-2'>
              <div
                className='bg-amber-300 px-4 py-2 rounded-lg flex items-center'
                style={{
                  boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
                  border: '2px solid black',
                  transition: 'all 0.2s ease',
                  transform: 'translate(0, 0)',
                  position: 'relative',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translate(4px, 4px)';
                  e.currentTarget.style.boxShadow =
                    '0px 0px 0px 0px rgba(0, 0, 0, 1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow =
                    '3px 3px 0px 0px rgba(0, 0, 0, 1)';
                }}
              >
                <span className='text-xl font-bold text-black'>DevSnap</span>
              </div>
            </Link>
            <p className='mt-4 text-gray-800'>
              The platform for developers to share learning goals and connect
              with like-minded coders.
            </p>
            <div className='mt-6 flex space-x-4'>
              <a
                href='https://github.com'
                className='text-gray-800 hover:text-orange-500'
                aria-label='GitHub'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                  background: '#f0abfc',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)';
                  e.currentTarget.style.boxShadow =
                    '0px 0px 0px 0px rgba(0, 0, 0, 1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow =
                    '2px 2px 0px 0px rgba(0, 0, 0, 1)';
                }}
              >
                <Github size={20} />
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-800 hover:text-orange-500'
                aria-label='Twitter'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                  background: '#93c5fd',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)';
                  e.currentTarget.style.boxShadow =
                    '0px 0px 0px 0px rgba(0, 0, 0, 1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow =
                    '2px 2px 0px 0px rgba(0, 0, 0, 1)';
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-800 hover:text-orange-500'
                aria-label='LinkedIn'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                  background: '#86efac',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)';
                  e.currentTarget.style.boxShadow =
                    '0px 0px 0px 0px rgba(0, 0, 0, 1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow =
                    '2px 2px 0px 0px rgba(0, 0, 0, 1)';
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Footer navigation sections */}
          {footerSections.map((section, index) => {
            // Alternate colors for section headings
            const colors = ['bg-pink-200', 'bg-blue-200', 'bg-green-200'];
            const bgColor = colors[index % colors.length];

            return (
              <div key={section.title}>
                <h3
                  className={`text-lg font-bold mb-4 inline-block ${bgColor} px-4 py-1 rounded-lg`}
                  style={{
                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                    border: '2px solid black',
                  }}
                >
                  {section.title}
                </h3>
                <ul className='space-y-2'>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-gray-800 hover:text-orange-500 hover:underline'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className='pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-800'>
            &copy; {new Date().getFullYear()} DevSnap. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0 flex flex-wrap gap-4'>
            <Link
              href='/terms'
              className='bg-gray-100 px-3 py-1 rounded-lg text-gray-800 hover:bg-gray-200'
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '1px solid black',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translate(2px, 2px)';
                e.currentTarget.style.boxShadow =
                  '0px 0px 0px 0px rgba(0, 0, 0, 1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow =
                  '2px 2px 0px 0px rgba(0, 0, 0, 1)';
              }}
            >
              Terms of Service
            </Link>
            <Link
              href='/privacy'
              className='bg-gray-100 px-3 py-1 rounded-lg text-gray-800 hover:bg-gray-200'
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '1px solid black',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translate(2px, 2px)';
                e.currentTarget.style.boxShadow =
                  '0px 0px 0px 0px rgba(0, 0, 0, 1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow =
                  '2px 2px 0px 0px rgba(0, 0, 0, 1)';
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
