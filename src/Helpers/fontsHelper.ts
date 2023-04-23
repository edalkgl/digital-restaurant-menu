import { Inter, Lobster } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

export const fontLobster = Lobster({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-sans'
});
