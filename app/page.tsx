// app/page.tsx
import Hero from '@/components/sections/Hero';
import WhyUs from '@/components/sections/WhyUs';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Home(): JSX.Element {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
