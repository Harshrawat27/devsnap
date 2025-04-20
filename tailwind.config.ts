// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // You can customize your color palette here
      },
      fontFamily: {
        // You can add custom fonts here
      },
      animation: {
        // Custom animations
      },
      keyframes: {
        // Custom keyframes
      },
    },
  },
  plugins: [],
};

export default config;
