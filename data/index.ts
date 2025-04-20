// data/index.ts
import { FeatureCard, PricingTier, Testimonial, FooterSection } from '@/types';

// Why Us Feature Cards
export const whyUsData: FeatureCard[] = [
  {
    id: 1,
    icon: '👩‍💻',
    title: 'Find developers & mentors',
    description:
      'Get matched with devs who have similar learning goals so you can grow together.',
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Save time & progress',
    description:
      'Track your goals, contribute to open source, and build toward career advancement with purpose and clarity.',
  },
  {
    id: 3,
    icon: '✨',
    title: 'Continuous process improvement',
    description:
      'See your portfolio update as you complete goals. Get metrics on your coding habits and celebrate consistent improvement.',
  },
];

// How It Works Features
export const howItWorksData: FeatureCard[] = [
  {
    id: 1,
    title: 'Create Learning Plans with AI',
    description:
      'Unlock the power of AI to generate customized learning roadmaps based on your interests, experience level, and career goals.',
    imageSrc: '/api/placeholder/600/400',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    description:
      'Connect with developers who share your learning path. Form coding circles and keep each other accountable in real-time.',
    imageSrc: '/api/placeholder/600/400',
  },
  {
    id: 3,
    title: 'Build Your Portfolio Automatically',
    description:
      'Complete your goals and watch your portfolio website build itself from your GitHub repositories and learning milestones.',
    imageSrc: '/api/placeholder/600/400',
  },
  {
    id: 4,
    title: 'Find Mentors & Inspiration',
    description:
      'Follow experienced developers, see their learning paths, and get inspired by how they achieved their current skill level.',
    imageSrc: '/api/placeholder/600/400',
  },
  {
    id: 5,
    title: 'Schedule Learning Sessions',
    description:
      'Schedule recurring checkpoints for daily, weekly, or monthly goals. Receive reminders and track your completion consistency.',
    imageSrc: '/api/placeholder/600/400',
  },
  {
    id: 6,
    title: 'Real-Time Progress Analytics',
    description:
      'Get a clear view of how your learning journey is progressing. Track completed projects, learning hours, and growth patterns.',
    imageSrc: '/api/placeholder/600/400',
  },
];

// Features Section Data
export const featuresData: FeatureCard[] = [
  {
    id: 'ai-driven',
    title: 'AI-driven',
    description:
      'Our intelligent algorithms study the paths successful developers followed to achieve their goals. We then create tailored roadmaps that align with your specific interests, work style, and learning preferences.',
    bgColor: 'bg-amber-100',
    colorTheme: 'amber',
  },
  {
    id: 'task-management',
    title: 'Task Management',
    description:
      'Break down your learning journey into manageable goals. Track your progress on learning paths, project milestones, and skill acquisition in one centralized dashboard.',
    bgColor: 'bg-pink-100',
    colorTheme: 'pink',
  },
  {
    id: 'workflow-management',
    title: 'Workflow Management',
    description:
      'Our platform provides a clear and intuitive interface for managing your learning workflow, including the ability to manage resources, track completion, and link progress to your public portfolio.',
    bgColor: 'bg-green-100',
    colorTheme: 'green',
  },
  {
    id: 'real-time-collaboration',
    title: 'Real-time collaboration',
    description:
      'Our platform allows for seamless collaboration with your peers. Connect with developers on similar paths, share resources, and participate in coding sessions to accelerate learning.',
    bgColor: 'bg-purple-100',
    colorTheme: 'blue',
  },
  {
    id: 'integration-with-tools',
    title: 'Integration with other tools',
    description:
      'Our platform integrates with a range of other tools and platforms, making it easy to incorporate data from GitHub, Stack Overflow, and other platforms you already use in your development workflow.',
    bgColor: 'bg-blue-100',
    colorTheme: 'pink',
  },
  {
    id: 'templates',
    title: '100+ Templates',
    description:
      'Our library of templates includes over 100 pre-built learning paths covering a wide range of languages and use cases. Find inspiration or use them as-is to jumpstart your developer journey.',
    bgColor: 'bg-indigo-100',
    colorTheme: 'purple',
  },
];

// Pricing Data
export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    description: 'Perfect for beginners',
    features: [
      'Learning path creation',
      'Personal portfolio',
      'Up to 3 active goals',
      'GitHub integration',
      'Community access',
      'Basic analytics',
    ],
    buttonText: 'Get Started - Free',
    buttonLink: '/signup',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$8',
    description: 'For dedicated developers',
    features: [
      'Everything in Starter',
      'Unlimited active goals',
      'AI-powered suggestions',
      'Advanced analytics',
      'Priority support',
      'Custom portfolio themes',
      'Mentor matching',
    ],
    buttonText: 'Go Pro',
    buttonLink: '/signup?plan=pro',
    highlighted: true,
    bgColor: 'bg-pink-100',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: "Let's Talk",
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team dashboards',
      'Talent analytics',
      'Custom integrations',
      'Dedicated support',
      'White-labeling',
      'Team goal setting',
    ],
    buttonText: 'Contact Sales',
    buttonLink: '/contact',
    bgColor: 'bg-green-100',
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "DevSnap transformed the way I approach learning. I've made more progress in 3 months than I did all last year trying to figure it out on my own. The platform is intuitive, and the community support is unparalleled.",
    author: 'Sarah J.',
    role: 'Frontend Developer',
    company: 'Freelance',
  },
  {
    id: 2,
    quote: 'Game changer.',
    author: 'Michael T.',
    role: 'Full-Stack Developer',
    company: 'Tech Startup',
  },
  {
    id: 3,
    quote:
      'I used to feel lost navigating endless tutorials. DevSnap gave me a clear, hands-on curriculum that made all the difference.',
    author: 'Alex K.',
    role: 'Junior Developer',
    company: 'E-commerce Platform',
  },
  {
    id: 4,
    quote:
      "Before DevSnap, working on real projects felt out of reach. Now, I've built three complete apps that I proudly showcase in my portfolio. Each lesson feels tailored to my pace, and the feedback loop is lightning fast. I can't imagine going back to conventional courses.",
    author: 'Priya S.',
    role: 'UI Engineer',
    company: 'SaaS Company',
  },
  {
    id: 5,
    quote: 'Community-driven learning at its best.',
    author: 'Carlos M.',
    role: 'Software Engineer',
    company: 'RemoteWorks',
  },
  {
    id: 6,
    quote:
      'DevSnap’s bite-sized challenges fit perfectly into my busy schedule. I loved the instant feedback.',
    author: 'Linda W.',
    role: 'Backend Developer',
    company: 'Fintech Corp',
  },
  {
    id: 7,
    quote: "I've never learned so quickly.",
    author: 'Jamal R.',
    role: 'Full-Stack Engineer',
    company: 'Enterprise Solutions',
  },
  {
    id: 8,
    quote:
      'The peer review sessions pushed me to write cleaner code and taught me best practices I didn’t know existed. The mentors on DevSnap are always available for questions. It feels like having your own personal coach.',
    author: 'Emily F.',
    role: 'Frontend Developer',
    company: 'Design Studio',
  },
  {
    id: 9,
    quote: 'Thanks to DevSnap, I landed my dream job.',
    author: 'Rahul P.',
    role: 'Full-Stack Developer',
    company: 'Startup Inc.',
  },
  {
    id: 10,
    quote:
      'Choosing a learning platform was tough. DevSnap’s AI-driven roadmap stood out immediately. It adapted to my strengths and weaknesses, guiding me through advanced topics seamlessly. Highly recommended for anyone serious about leveling up their skills.',
    author: 'Zara L.',
    role: 'Software Developer',
    company: 'HealthTech',
  },
];

// Footer Data
export const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
      { name: 'Templates', href: '/templates' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
];
