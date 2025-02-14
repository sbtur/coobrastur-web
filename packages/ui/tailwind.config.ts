import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
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
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-primary))',
        base: 'hsl(var(--color-neutral-950))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-foreground))',
          hover: 'hsl(var(--color-primary-hover))',
          focus: 'hsl(var(--color-primary-focus))',
          dark: 'hsl(var(--color-primary-dark))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-foreground))',
          hover: 'hsl(var(--color-primary-hover))',
          focus: 'hsl(var(--color-primary-focus))',
        },
        success: {
          DEFAULT: 'hsl(var(--color-success))',
          foreground: 'hsl(var(--color-foreground))',
          hover: 'hsl(var(--color-success-hover))',
          focus: 'hsl(var(--color-success-focus))',
        },
        danger: {
          DEFAULT: 'hsl(var(--color-danger))',
          foreground: 'hsl(var(--color-foreground))',
          hover: 'hsl(var(--color-danger-hover))',
          focus: 'hsl(var(--color-danger-focus))',
        },
        warning: {
          DEFAULT: 'hsl(var(--color-warning))',
          foreground: 'hsl(var(--color-foreground))',
          hover: 'hsl(var(--color-warning-hover))',
          focus: 'hsl(var(--color-warning-focus))',
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
