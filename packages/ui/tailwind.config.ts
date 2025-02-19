import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '../../apps/web/app/**/*.{ts,tsx}',
    '../../apps/web/components/**/*.{ts,tsx}',
    '../../apps/web/shared/**/*.{ts,tsx}',
    '../../packages/ui/src/components/**/*.{ts,tsx}',
    '../../packages/ui/src/external/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-family-primary)', ...fontFamily.sans],
        secondary: ['var(--font-family-secondary)', ...fontFamily.sans],
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      colors: {
        neutral: {
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
        border: 'var(--color-border)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'var(--color-background)',
        foreground: 'var(--color-primary)',
        base: 'var(--color-neutral-900)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-foreground)',
          hover: 'var(--color-primary-hover)',
          focus: 'var(--color-primary-focus)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-foreground)',
          hover: 'var(--color-primary-hover)',
          focus: 'var(--color-primary-focus)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-foreground)',
          hover: 'var(--color-success-hover)',
          focus: 'var(--color-success-focus)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          foreground: 'var(--color-foreground)',
          hover: 'var(--color-danger-hover)',
          focus: 'var(--color-danger-focus)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-foreground)',
          hover: 'var(--color-warning-hover)',
          focus: 'var(--color-warning-focus)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
