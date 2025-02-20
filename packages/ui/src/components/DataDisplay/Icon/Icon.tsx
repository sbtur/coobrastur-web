import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

const iconVariants = cva('inline-flex shrink-0', {
  variants: {
    size: {
      sm: 'text-base', // 16px
      md: 'text-xl', // 20px
      lg: 'text-2xl', // 24px
      xl: 'text-3xl', // 30px
    },
    variant: {
      primary: 'text-highlight',
      secondary: 'text-primary',
      neutral: 'text-neutral-400',
      white: 'text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'neutral',
  },
} as const);

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps extends IconVariants {
  icon: LucideIcon;
  className?: string;
}

export const Icon = ({
  icon: IconComponent,
  size,
  variant,
  className,
  ...props
}: IconProps) => {
  const IconElement = IconComponent as unknown as React.ElementType;
  return (
    <IconElement
      className={cn(iconVariants({ size, variant }), className)}
      aria-hidden="true"
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
