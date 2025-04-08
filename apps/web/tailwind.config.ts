import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@coobrastur/ui/tailwind.config';

const config = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './shared/lib/variants/**/*.{ts,tsx}',
    './shared/components/**/*.{ts,tsx}',
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      fontFamily: {
        ...baseConfig.theme?.extend?.fontFamily,
        primary: ['var(--font-mangueira)'],
        secondary: ['var(--font-source-sans-pro)'],
      },
    },
  },
} satisfies Config;

export default config;
