// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevSnap - Connect with like-minded developers',
  description:
    'Share your learning goals and connect with developers on similar paths. Build your portfolio and track your progress together.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
