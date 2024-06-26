import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--roboto)'],
        orbitron: ['var(--orbitron)'],
      },
      backgroundImage: {
        header: "url('../public/bg-storm.png')",
      },
    },
  },
  plugins: [],
};
export default config;
