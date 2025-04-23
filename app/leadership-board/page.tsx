'use client';

import { FC, useState } from 'react';

// Types for our leaderboard data
type Developer = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  points: number;
  streak: number;
  badges: number;
  rank: number;
};

// Import Animated Button - same as used in other components
import AnimatedButton from '@/components/ui/AnimatedButton';

// Update some developers to have no avatars
// so we can demonstrate the fallback to initials
const mockDevelopers: Developer[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    username: '@sarahcodes',
    avatar: '', // No avatar
    points: 9850,
    streak: 42,
    badges: 15,
    rank: 1,
  },
  {
    id: 2,
    name: 'Michael Chen',
    username: '@mikedev',
    avatar: '',
    points: 9720,
    streak: 38,
    badges: 14,
    rank: 2,
  },
  {
    id: 3,
    name: 'Aisha Patel',
    username: '@aishacodes',
    avatar: '', // No avatar
    points: 9640,
    streak: 45,
    badges: 12,
    rank: 3,
  },
  {
    id: 4,
    name: 'James Wilson',
    username: '@jwilson',
    avatar: '',
    points: 9510,
    streak: 29,
    badges: 13,
    rank: 4,
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    username: '@elenarodev',
    avatar: '',
    points: 9350,
    streak: 33,
    badges: 11,
    rank: 5,
  },
  {
    id: 6,
    name: 'David Kim',
    username: '@davidk',
    avatar: '',
    points: 9210,
    streak: 27,
    badges: 10,
    rank: 6,
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    username: '@oliviadev',
    avatar: '', // No avatar
    points: 9050,
    streak: 39,
    badges: 12,
    rank: 7,
  },
  {
    id: 8,
    name: 'Raj Singh',
    username: '@rajcodes',
    avatar: '', // No avatar
    points: 8920,
    streak: 31,
    badges: 9,
    rank: 8,
  },
  {
    id: 9,
    name: 'Emily Turner',
    username: '@emilyturner',
    avatar: '',
    points: 8780,
    streak: 22,
    badges: 11,
    rank: 9,
  },
  {
    id: 10,
    name: 'Lucas Nguyen',
    username: '@lucasdev',
    avatar: '',
    points: 8650,
    streak: 35,
    badges: 10,
    rank: 10,
  },
  {
    id: 11,
    name: 'Sophia Lee',
    username: '@sophial',
    avatar: '',
    points: 8520,
    streak: 28,
    badges: 9,
    rank: 11,
  },
  {
    id: 12,
    name: 'Jordan Taylor',
    username: '@jordant',
    avatar: '',
    points: 8370,
    streak: 25,
    badges: 8,
    rank: 12,
  },
  {
    id: 13,
    name: 'Hassan Ahmed',
    username: '@hassanahmed',
    avatar: '',
    points: 8240,
    streak: 32,
    badges: 9,
    rank: 13,
  },
  {
    id: 14,
    name: 'Grace Wong',
    username: '@gracew',
    avatar: '',
    points: 8120,
    streak: 21,
    badges: 7,
    rank: 14,
  },
  {
    id: 15,
    name: 'Marcus Johnson',
    username: '@marcusj',
    avatar: '',
    points: 7950,
    streak: 19,
    badges: 8,
    rank: 15,
  },
  {
    id: 16,
    name: 'Leila Fernandez',
    username: '@leilacodes',
    avatar: '',
    points: 7840,
    streak: 26,
    badges: 7,
    rank: 16,
  },
  {
    id: 17,
    name: 'Tyler Robinson',
    username: '@tylerr',
    avatar: '',
    points: 7710,
    streak: 18,
    badges: 6,
    rank: 17,
  },
  {
    id: 18,
    name: 'Zoe Chen',
    username: '@zoechen',
    avatar: '',
    points: 7580,
    streak: 23,
    badges: 7,
    rank: 18,
  },
  {
    id: 19,
    name: 'Isaac Powell',
    username: '@isaacdev',
    avatar: '',
    points: 7430,
    streak: 17,
    badges: 5,
    rank: 19,
  },
  {
    id: 20,
    name: 'Nadia Khan',
    username: '@nadiakhan',
    avatar: '',
    points: 7290,
    streak: 15,
    badges: 5,
    rank: 20,
  },
];

// Sort options for the leaderboard
type SortOption = 'points' | 'streak' | 'badges';

const DeveloperLeaderboard: FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('points');
  const [searchQuery, setSearchQuery] = useState('');

  // Sort and filter developers based on current state
  const getSortedDevelopers = () => {
    let sorted = [...mockDevelopers];

    // Sort based on selected option
    if (sortBy === 'points') {
      sorted.sort((a, b) => b.points - a.points);
    } else if (sortBy === 'streak') {
      sorted.sort((a, b) => b.streak - a.streak);
    } else if (sortBy === 'badges') {
      sorted.sort((a, b) => b.badges - a.badges);
    }

    // Apply search filter if query exists
    if (searchQuery) {
      sorted = sorted.filter(
        (dev) =>
          dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dev.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Re-assign ranks based on current sort
    return sorted.map((dev, index) => ({
      ...dev,
      rank: index + 1,
    }));
  };

  const displayDevelopers = getSortedDevelopers();

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Developer <span className='text-orange-600'>Leaderboard</span>
          </h2>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
            See who&apos;s leading the pack in the DevSnap community. Climb the
            ranks by completing your learning goals and helping others!
          </p>
        </div>

        {/* Search and filter controls */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
          <div className='relative w-full md:w-64'>
            <input
              type='text'
              placeholder='Search developers...'
              className='w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none'
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '2px solid black',
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className='absolute left-3 top-3 w-4 h-4 text-gray-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='flex space-x-3'>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105 ${
                sortBy === 'points'
                  ? 'bg-amber-200 text-black'
                  : 'bg-blue-200 text-black'
              }`}
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '2px solid black',
              }}
              onClick={() => setSortBy('points')}
            >
              Points
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105 ${
                sortBy === 'streak'
                  ? 'bg-amber-200 text-black'
                  : 'bg-blue-200 text-black'
              }`}
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '2px solid black',
              }}
              onClick={() => setSortBy('streak')}
            >
              Streak
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105 ${
                sortBy === 'badges'
                  ? 'bg-amber-200 text-black'
                  : 'bg-blue-200 text-black'
              }`}
              style={{
                boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                border: '2px solid black',
              }}
              onClick={() => setSortBy('badges')}
            >
              Badges
            </button>
          </div>
        </div>

        {/* Leaderboard table */}
        <div
          className='bg-white rounded-xl overflow-hidden'
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
            border: '2px solid black',
          }}
        >
          {/* Table header */}
          <div className='hidden md:grid grid-cols-12 bg-blue-200 py-4 px-6 font-medium text-gray-900 border-b-2 border-black'>
            <div className='col-span-1'>Rank</div>
            <div className='col-span-4'>Developer</div>
            <div className='col-span-2 text-center'>Points</div>
            <div className='col-span-2 text-center'>Streak</div>
            <div className='col-span-2 text-center'>Badges</div>
            <div className='col-span-1'></div>
          </div>

          {/* Table body */}
          <div className='divide-y divide-gray-200'>
            {displayDevelopers.length > 0 ? (
              displayDevelopers.map((dev) => (
                <div
                  key={dev.id}
                  className={`grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center ${
                    dev.rank <= 3 ? 'bg-amber-50' : ''
                  }`}
                >
                  {/* Rank */}
                  <div className='hidden md:block col-span-1 font-bold'>
                    {dev.rank <= 3 ? (
                      <span
                        className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-300 font-bold'
                        style={{
                          boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                          border: '1px solid black',
                        }}
                      >
                        {dev.rank}
                      </span>
                    ) : (
                      <span>{dev.rank}</span>
                    )}
                  </div>

                  {/* Developer info - mobile */}
                  <div className='md:hidden flex items-center justify-between mb-3'>
                    <div className='flex items-center'>
                      {dev.rank <= 3 ? (
                        <span
                          className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-300 mr-3 font-bold'
                          style={{
                            boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                            border: '1px solid black',
                          }}
                        >
                          {dev.rank}
                        </span>
                      ) : (
                        <span className='w-8 text-center mr-3 font-bold'>
                          {dev.rank}
                        </span>
                      )}
                      {/* Avatar or Initial */}
                      {dev.avatar ? (
                        <img
                          src={dev.avatar}
                          alt={dev.name}
                          className='w-10 h-10 rounded-full object-cover mr-3'
                          style={{
                            border: '2px solid black',
                          }}
                        />
                      ) : (
                        <div
                          className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3'
                          style={{
                            border: '2px solid black',
                          }}
                        >
                          <span className='text-lg font-bold text-black'>
                            {dev.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className='font-bold'>{dev.name}</h3>
                        <p className='text-gray-500 text-sm'>{dev.username}</p>
                      </div>
                    </div>
                  </div>

                  {/* Developer info - desktop */}
                  <div className='hidden md:flex col-span-4 items-center'>
                    {/* Avatar or Initial */}
                    {dev.avatar ? (
                      <img
                        src={dev.avatar}
                        alt={dev.name}
                        className='w-10 h-10 rounded-full object-cover mr-3'
                        style={{
                          border: '2px solid black',
                        }}
                      />
                    ) : (
                      <div
                        className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3'
                        style={{
                          border: '2px solid black',
                        }}
                      >
                        <span className='text-lg font-bold text-black'>
                          {dev.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className='font-bold'>{dev.name}</h3>
                      <p className='text-gray-500 text-sm'>{dev.username}</p>
                    </div>
                  </div>

                  {/* Mobile view - stats */}
                  <div className='md:hidden grid grid-cols-3 gap-2 mb-2'>
                    <div
                      className='text-center p-2 bg-blue-100 rounded-lg'
                      style={{
                        border: '1px solid black',
                      }}
                    >
                      <p className='text-xs text-gray-700'>Points</p>
                      <p className='font-bold'>{dev.points.toLocaleString()}</p>
                    </div>
                    <div
                      className='text-center p-2 bg-orange-100 rounded-lg'
                      style={{
                        border: '1px solid black',
                      }}
                    >
                      <p className='text-xs text-gray-700'>Streak</p>
                      <p className='font-bold'>{dev.streak} days</p>
                    </div>
                    <div
                      className='text-center p-2 bg-green-100 rounded-lg'
                      style={{
                        border: '1px solid black',
                      }}
                    >
                      <p className='text-xs text-gray-700'>Badges</p>
                      <p className='font-bold'>{dev.badges}</p>
                    </div>
                  </div>

                  {/* Stats - desktop */}
                  <div className='hidden md:block col-span-2 text-center font-medium'>
                    {dev.points.toLocaleString()}
                  </div>
                  <div className='hidden md:block col-span-2 text-center'>
                    <span className='inline-flex items-center'>
                      <svg
                        className='w-4 h-4 mr-1 text-orange-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {dev.streak} days
                    </span>
                  </div>
                  <div className='hidden md:block col-span-2 text-center'>
                    <span className='inline-flex items-center'>
                      <svg
                        className='w-4 h-4 mr-1 text-blue-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {dev.badges}
                    </span>
                  </div>

                  {/* Profile button */}
                  <div className='md:col-span-1 text-right'>
                    <button
                      className='px-3 py-1 text-sm font-medium bg-blue-200 rounded transition-transform hover:scale-105'
                      style={{
                        boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                        border: '1px solid black',
                      }}
                    >
                      Profile
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className='py-12 text-center text-gray-500'>
                No developers found matching your search.
              </div>
            )}
          </div>
        </div>

        {/* Call to action */}
        <div className='mt-10 text-center'>
          <div
            className='inline-block bg-green-100 py-4 px-6 rounded-lg'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              border: '2px solid black',
            }}
          >
            <p className='font-medium mb-4'>
              Not on the leaderboard yet? Start your coding journey today!
            </p>
            <AnimatedButton href='/signup' color='amber'>
              Join DevSnap Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperLeaderboard;
