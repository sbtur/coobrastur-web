import type { HTMLAttributes, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

type SectionElement = 'div' | 'section' | 'main';

const containerVariants = cva('max-w-full bg-background', {
  variants: {
    spacing: {
      none: '', // 0px
      sm: 'py-4', // 16px
      md: 'py-6', // 24px
      lg: 'py-8 lg:py-14', // 32px-56px
      xl: 'py-12 lg:py-20', // 48px-80px
    },
  },
  defaultVariants: {
    spacing: 'lg',
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
  spacing,
}: SectionProps) => {
  return (
    <Element className={cn(containerVariants({ spacing }), className)}>
      {children}
    </Element>
  );
};
