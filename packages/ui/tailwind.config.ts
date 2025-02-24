import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

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
        text: {
          DEFAULT: 'var(--color-text)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          warning: 'var(--color-text-warning)',
          danger: 'var(--color-text-danger)',
          success: 'var(--color-text-success)',
          highlight: 'var(--color-text-highlight)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral-500)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
        },
        border: 'var(--color-border)',
        input: 'var(--color-neutral-200)',
        ring: 'hsl(var(--ring))',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary-200)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-200)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          hover: 'var(--color-secondary-hover)',
          focus: 'var(--color-secondary-focus)',
        },
        success: {
          DEFAULT: 'var(--color-success-200)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          hover: 'var(--color-success-hover)',
          focus: 'var(--color-success-focus)',
        },
        danger: {
          DEFAULT: 'var(--color-danger-200)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          hover: 'var(--color-danger-hover)',
          focus: 'var(--color-danger-focus)',
        },
        warning: {
          DEFAULT: 'var(--color-warning-200)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          hover: 'var(--color-warning-hover)',
          focus: 'var(--color-warning-focus)',
        },
        highlight: {
          DEFAULT: 'var(--color-highlight-100)',
          100: 'var(--color-highlight-100)',
          200: 'var(--color-highlight-200)',
          300: 'var(--color-highlight-300)',
          hover: 'var(--color-highlight-hover)',
          focus: 'var(--color-highlight-focus)',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
