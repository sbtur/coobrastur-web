import type { HTMLAttributes, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

type SectionElement = 'div' | 'section';

const containerVariants = cva('max-w-full bg-background', {
  variants: {
    spacing: {
      none: '', // 0px
      sm: 'mt-4', // 16px
      md: 'mt-6', // 24px
      lg: 'mt-8 lg:mt-14', // 32px-56px
      xl: 'mt-12 lg:mt-20', // 48px-80px
    },
  },
  defaultVariants: {
    spacing: 'md',
  },
} as const);

interface ContentProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: SectionElement;
  children: ReactNode;
  className?: string;
}

export const Content = ({
  as: Element = 'div',
  className,
  children,
  spacing,
}: ContentProps) => {
  return (
    <Element className={cn(containerVariants({ spacing }), className)}>
      {children}
    </Element>
  );
};
