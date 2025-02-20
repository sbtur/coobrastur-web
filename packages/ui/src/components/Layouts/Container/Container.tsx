import type { HTMLAttributes, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

type ContainerElement = 'div' | 'header' | 'section' | 'main' | 'footer';

const containerVariants = cva('mx-auto w-full', {
  variants: {
    size: {
      sm: 'max-w-3xl', // 768px
      md: 'max-w-5xl', // 1024px
      lg: 'max-w-7xl', // 1280px
      xl: 'max-w-[1440px]', // 1440px
      full: 'max-w-full', // 100%
    },
    padding: {
      none: '', // 0px
      sm: 'py-4', // 16px
      md: 'py-6', // 24px
      lg: 'py-20', // 80px
      xl: 'py-28', // 112px
    },
    responsive: {
      true: 'w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1140px] 2xl:w-[1280px]',
      false: '',
    },
  },
  defaultVariants: {
    size: 'lg',
    padding: 'none',
    responsive: false,
  },
} as const);

interface ContainerProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
}

export const Container = ({
  as: Element = 'div',
  className,
  children,
  size,
  padding,
  responsive,
}: ContainerProps) => {
  return (
    <Element
      className={cn(
        containerVariants({ size, padding, responsive }),
        className,
      )}
    >
      {children}
    </Element>
  );
};
