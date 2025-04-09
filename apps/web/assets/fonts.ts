import localFont from 'next/font/local';

export const mangueira = localFont({
  src: [
    {
      path: '../public/fonts/mangueira/Mangueira-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/mangueira/Mangueira-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mangueira',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
});

export const sourceSansPro = localFont({
  src: [
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-source-sans-pro',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
});
