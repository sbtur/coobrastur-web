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

export const sourceSansPro = localFont({
  src: [
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Regular.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-SemiBold.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-source-sans-pro',
});
