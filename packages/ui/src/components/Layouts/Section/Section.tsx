import type { HTMLAttributes, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@coobrastur/ui/lib/utils';

type SectionElement = 'div' | 'section';

const containerVariants = cva('', {
  variants: {
    size: {
      sm: 'max-w-3xl', // 768px
      md: 'max-w-5xl', // 1024px
      lg: 'max-w-7xl', // 1280px
      xl: 'max-w-[1440px]', // 1440px
      full: 'max-w-full', // 100%
    },
    spacing: {
      none: '', // 0px
      sm: 'mt-4', // 16px
      md: 'mt-6', // 24px
      lg: 'mt-8 lg:mt-14', // 32px-56px
      xl: 'mt-12 lg:mt-20', // 48px-80px
    },
  },
  defaultVariants: {
    size: 'full',
    spacing: 'md',
  },
} as const);

interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: SectionElement;
  children: ReactNode;
  className?: string;
}

export const Section = ({
  as: Element = 'section',
  className,
  children,
  size,
  spacing,
}: SectionProps) => {
  return (
    <Element className={cn(containerVariants({ size, spacing }), className)}>
      {children}
    </Element>
  );
};
