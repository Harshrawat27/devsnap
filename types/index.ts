// types/index.ts

// Common types
export interface LinkItem {
  name: string;
  href: string;
}

// Feature related types
export interface FeatureCard {
  id: number | string;
  icon?: string;
  title: string;
  description: string;
  bgColor?: string;
  imageSrc?: string;
  colorTheme?: 'amber' | 'pink' | 'green' | 'blue' | 'purple';
}

// Pricing related types
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  bgColor: string;
}

// Testimonial related types
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

// Footer related types
export interface FooterSection {
  title: string;
  links: LinkItem[];
}
