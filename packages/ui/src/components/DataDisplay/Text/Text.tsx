import { type ElementType } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@coobrastur/ui/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs', // 12px
      sm: 'text-sm', // 14px
      base: 'text-base', // 16px
      lg: 'text-xl', // 20px
      xl: 'text-2xl', // 24px
    },
    spacing: {
      none: 'mb-0', // 0px
      sm: 'mb-1', // 4px
      md: 'mb-2', // 8px
      lg: 'mb-4', // 16px
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
    },
    variant: {
      base: 'text-text',
      featured: 'text-text-primary',
      success: 'text-text-success',
      warning: 'text-text-warning',
      danger: 'text-text-danger',
    },
  },
  defaultVariants: {
    size: 'base',
    spacing: 'none',
    weight: 'normal',
    align: 'left',
    variant: 'base',
  },
} as const);

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
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';
