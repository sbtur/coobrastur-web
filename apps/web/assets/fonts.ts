import { Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';

export const mangueira = localFont({
  src: [
    {
      path: '../public/fonts/mangueira/Mangueira-Regular.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-SemiBold.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-Bold.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-mangueira',
});

export const sourceSans3 = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
});
