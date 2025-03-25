import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@coobrastur/ui/tailwind.config';

const config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      fontFamily: {
        ...baseConfig.theme?.extend?.fontFamily,
        primary: ['var(--font-mangueira)', ...fontFamily.sans],
        secondary: ['var(--font-source-sans)', ...fontFamily.mono],
      },
    },
  },
} satisfies Config;

export default config;
