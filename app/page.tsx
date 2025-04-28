// app/page.tsx
'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import WaitlistSection from '@/components/sections/WaitlistSection';
import { captureReferralFromURL } from '@/utils/referral';
import { FC } from 'react';

const Home: FC = () => {
  useEffect(() => {
    // Capture referral from URL on page load
    captureReferralFromURL();
  }, []);

  return (
    <main className='min-h-screen'>
      <Header />
      <WaitlistSection />
      {/* Commented components can be uncommented later
      <Hero />
      <WhyUs />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer /> */}
    </main>
  );
};

export default Home;

// app/page.tsx
// app/page.tsx
// app/page.tsx
// app/page.tsx
// app/page.tsx
// app/page.tsx
// app/page.tsx
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className='min-h-screen'>
//       {/* Add your existing code here */}

//       <BenefitsSection />

//       {/* Add your existing code here */}
//     </main>
//   );
// }

// // You can also create this as a separate component in app/components/BenefitsSection.tsx
// function BenefitsSection() {
//   return (
//     <section className='py-16 px-4 max-w-7xl mx-auto'>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//         {/* Card 1 */}
//         <div
//           className='bg-amber-200 rounded-xl p-8 relative overflow-hidden'
//           style={{
//             boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
//             border: '2px solid black',
//           }}
//         >
//           <div className='relative mb-6'>
//             {/* Circle with 3D effect */}
//             <div
//               className='bg-red-300 w-16 h-16 rounded-full flex items-center justify-center'
//               style={{
//                 boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
//                 border: '2px solid black',
//               }}
//             >
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 width='24'
//                 height='24'
//                 viewBox='0 0 24 24'
//                 fill='none'
//                 stroke='currentColor'
//                 strokeWidth='2'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//               >
//                 <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
//                 <polyline points='22 4 12 14.01 9 11.01'></polyline>
//               </svg>
//             </div>
//           </div>

//           <h2 className='text-3xl font-bold mb-4'>
//             Reduce mistakes & failures
//           </h2>

//           <p className='mb-6'>
//             Are you frustrated due to repeated mistakes and not sure how to go
//             about it?
//           </p>

//           <p>
//             Use checklist.gg to get things done right and drive your
//             organization to success.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div
//           className='bg-pink-200 rounded-xl p-8 relative overflow-hidden'
//           style={{
//             boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
//             border: '2px solid black',
//           }}
//         >
//           <div className='relative mb-6'>
//             {/* Circle with 3D effect */}
//             <div
//               className='bg-green-300 w-16 h-16 rounded-full flex items-center justify-center'
//               style={{
//                 boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
//                 border: '2px solid black',
//               }}
//             >
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 width='24'
//                 height='24'
//                 viewBox='0 0 24 24'
//                 fill='none'
//                 stroke='currentColor'
//                 strokeWidth='2'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//               >
//                 <circle cx='12' cy='12' r='10'></circle>
//                 <polyline points='12 6 12 12 16 14'></polyline>
//               </svg>
//             </div>
//           </div>

//           <h2 className='text-3xl font-bold mb-4'>Save time & money</h2>

//           <p className='mb-6'>Are you losing time and money due to rework?</p>

//           <p>
//             Keep your Checklists, Processes and SOPs updated every day and see
//             reduced rework across your organization to save time and money.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div
//           className='bg-green-200 rounded-xl p-8 relative overflow-hidden'
//           style={{
//             boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
//             border: '2px solid black',
//           }}
//         >
//           <div className='relative mb-6'>
//             {/* Circle with 3D effect */}
//             <div
//               className='bg-pink-300 w-16 h-16 rounded-full flex items-center justify-center'
//               style={{
//                 boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
//                 border: '2px solid black',
//               }}
//             >
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 width='24'
//                 height='24'
//                 viewBox='0 0 24 24'
//                 fill='none'
//                 stroke='currentColor'
//                 strokeWidth='2'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//               >
//                 <circle cx='12' cy='12' r='8'></circle>
//                 <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
//                 <line x1='12' y1='17' x2='12.01' y2='17'></line>
//               </svg>
//             </div>
//           </div>

//           <h2 className='text-3xl font-bold mb-4'>
//             Continuous process improvement
//           </h2>

//           <p className='mb-6'>
//             Are your checklists, processes, and SOPs stagnant without
//             improvements?
//           </p>

//           <p>
//             Use checklist.gg every time you do a process or a task and easily
//             ensure continuous improvement across your organization by keeping
//             them up to date.
//           </p>
//         </div>
//       </div>

//       {/* CTA Button with hover animation - using Tailwind classes */}
//       <div className='flex justify-center mt-12'>
//         <Link
//           href='/get-started'
//           className='cta-button bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded-full relative transition-all duration-200 border-2 border-black'
//         >
//           Get started - it's free
//         </Link>
//       </div>

//       {/* Add this to your global CSS or a CSS module */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .cta-button {
//           box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
//           transform: translate(0, 0);
//           transition: all 0.2s ease;
//         }

//         .cta-button:hover {
//           transform: translate(4px, 4px);
//           box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
//         }
//       `,
//         }}
//       />
//     </section>
//   );
// }
