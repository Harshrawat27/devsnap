'use client';

import { FC, useState, FormEvent, useEffect } from 'react';
import { delay, motion } from 'framer-motion';

const WaitlistSection: FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call - replace with your actual API endpoint
    try {
      // await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setTimeout(() => {
        setIsSuccess(true);
        setEmail('');
        setIsSubmitting(false);
      }, 800);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting to waitlist:', error);
    }
  };

  const features = [
    {
      title: 'GitHub Integration',
      description:
        'Plug in your GitHub to unlock hidden patterns in your coding behavior—like when you’re most productive, what tech stacks you gravitate toward, and how your coding style evolves over time. You’ll learn things even you didn’t know about yourself.',
      icon: (
        <svg
          className='w-8 h-8 text-orange-600'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
      animation: {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.8, delay: 0.2 },
      },
    },
    {
      title: 'Peer Group Coding',
      description:
        'Find developers working toward the same goals. Get matched based on your projects, learning paths, or vibes. Join peer rooms that spark accountability and collaboration—and vanish when the work’s done.',
      icon: (
        <svg
          className='w-8 h-8 text-blue-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      animation: {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, delay: 0.4 },
      },
    },
    {
      title: 'Project Management',
      description:
        'Built specifically for solo developers. Track your learning journey, share quick daily wins, and keep your momentum going without the overhead of bloated tools. Lightweight, focused, and designed for builders.',
      icon: (
        <svg
          className='w-8 h-8 text-green-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
          />
        </svg>
      ),
      animation: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, delay: 0.6 },
      },
    },
  ];

  return (
    <section className='min-h-screen py-16 bg-white flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-[#8976ea]'>DevSnap</span> - Snapchat for
              Developers
            </h2>
            <p className='text-lg md:text-xl text-gray-800 mx-auto mb-12'>
              Share your coding journey with time-limited updates. Connect with
              peers, integrate with GitHub, and manage projects in an ephemeral,
              engaging way.
            </p>

            {/* Email Input - Top Section */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='w-full max-w-md mx-auto mb-16'
            >
              <div className='bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4'>
                <form
                  onSubmit={handleSubmit}
                  className='flex flex-col sm:flex-row gap-3'
                >
                  <div className='flex-grow'>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Your email address'
                      className='w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-orange-500'
                      required
                    />
                  </div>
                  <div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-[#8976ea] hover:bg-[#6f5bd0] text-black font-medium rounded-lg border-2 border-black transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none ${
                        isSubmitting ? 'opacity-75' : ''
                      }`}
                    >
                      {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                </form>

                {isSuccess && (
                  <div className='mt-4 p-3 bg-green-100 text-green-700 rounded-lg border-2 border-green-500 flex items-center'>
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
                    <span>
                      You're on the list! We'll notify you when we launch.
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Feature Layout based on sketch */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
            {/* Left Feature (comes from left) */}
            <motion.div
              className='bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200'
              initial={features[0].animation.initial}
              animate={
                isVisible
                  ? features[0].animation.animate
                  : features[0].animation.initial
              }
              transition={features[0].animation.transition}
            >
              <div className='mb-4 p-3 inline-block bg-gray-100 rounded-lg border-2 border-black'>
                {features[0].icon}
              </div>
              <h3 className='text-xl font-bold mb-2'>{features[0].title}</h3>
              <p className='text-gray-700'>{features[0].description}</p>
            </motion.div>

            {/* Center-Top Feature (comes from top) */}
            <motion.div
              className='bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200'
              initial={features[1].animation.initial}
              animate={
                isVisible
                  ? features[1].animation.animate
                  : features[1].animation.initial
              }
              transition={features[1].animation.transition}
            >
              <div className='mb-4 p-3 inline-block bg-gray-100 rounded-lg border-2 border-black'>
                {features[1].icon}
              </div>
              <h3 className='text-xl font-bold mb-2'>{features[1].title}</h3>
              <p className='text-gray-700'>{features[1].description}</p>
            </motion.div>

            {/* Center-Bottom Feature (comes from bottom) - in mobile this will be the third in vertical order */}
            <motion.div
              className='bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200'
              initial={features[2].animation.initial}
              animate={
                isVisible
                  ? features[2].animation.animate
                  : features[2].animation.initial
              }
              transition={features[2].animation.transition}
            >
              <div className='mb-4 p-3 inline-block bg-gray-100 rounded-lg border-2 border-black'>
                {features[2].icon}
              </div>
              <h3 className='text-xl font-bold mb-2'>{features[2].title}</h3>
              <p className='text-gray-700'>{features[2].description}</p>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className='mt-12 text-sm font-medium flex justify-center gap-6 items-center text-gray-600'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
