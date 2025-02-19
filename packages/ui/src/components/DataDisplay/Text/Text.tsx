import { type ElementType } from 'react';

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
      base: 'text-neutral-950',
      featured: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
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

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType;
  truncate?: boolean;
}

export const Text = ({
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
}: TextProps) => {
  const Component = as || 'p';

  return (
    <Component
      className={cn(
        textVariants({ variant, size, spacing, weight, align }),
        truncate && 'truncate',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';
