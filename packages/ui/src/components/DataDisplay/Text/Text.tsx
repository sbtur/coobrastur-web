import type React from 'react';
import { forwardRef, type ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@workspace/ui/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      xsmall: 'text-xs',
      small: 'text-sm',
      base: 'text-base',
      large: 'text-xl',
      xlarge: 'text-2xl',
    },
    spacing: {
      small: 'mb-1',
      normal: 'mb-2',
      large: 'mb-4',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    variant: {
      base: 'text-base',
      featured: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-destructive',
    },
  },
  defaultVariants: {
    size: 'base',
    spacing: 'normal',
    weight: 'normal',
    align: 'left',
    variant: 'base',
  },
});

export interface TextProps<T extends ElementType = 'p'>
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: T;
  truncate?: boolean;
}

export const Text = forwardRef(
  <T extends ElementType = 'p'>(
    {
      className,
      as,
      size,
      spacing,
      weight,
      align,
      truncate,
      variant,
      children,
      ...props
    }: TextProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref']
  ) => {
    const Component = as || 'p';

    return (
      <Component
        className={cn(
          textVariants({ variant, size, spacing, weight, align }),
          truncate && 'truncate',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
