import { Roboto, Orbitron } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['300', '400', '500', '700'],
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});
