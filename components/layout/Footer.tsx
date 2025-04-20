// components/layout/Footer.tsx
import React, { FC } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { footerSections } from '@/data';

const Footer: FC = () => {
  return (
    <footer className='bg-gray-800 text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          {/* Logo and social links */}
          <div>
            <Link href='/' className='text-xl font-bold'>
              DevSnap
            </Link>
            <p className='mt-4 text-gray-300'>
              The platform for developers to share learning goals and connect
              with like-minded coders.
            </p>
            <div className='mt-6 flex space-x-4'>
              <a
                href='https://github.com'
                className='text-gray-300 hover:text-white'
                aria-label='GitHub'
              >
                <Github size={20} />
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-300 hover:text-white'
                aria-label='Twitter'
              >
                <Twitter size={20} />
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-300 hover:text-white'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Footer navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-white'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-300'>
            &copy; {new Date().getFullYear()} DevSnap. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0'>
            <Link href='/terms' className='text-gray-300 hover:text-white mr-4'>
              Terms of Service
            </Link>
            <Link href='/privacy' className='text-gray-300 hover:text-white'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
