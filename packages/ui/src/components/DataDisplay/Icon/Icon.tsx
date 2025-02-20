import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

const iconVariants = cva('inline-flex shrink-0', {
  variants: {
    variant: {
      primary: 'text-highlight group-[.hover]:text-highlight-hover',
      secondary: 'text-primary group-[.hover]:text-secondary-hover',
      neutral: 'text-neutral-400 group-[.hover]:text-neutral-500',
      white: 'text-white group-[.hover]:text-neutral-100',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
} as const);

interface IconSize {
  size?: 14 | 16 | 20 | 24;
}

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps extends IconVariants, IconSize {
  icon: LucideIcon;
  className?: string;
}

export const Icon = ({
  icon: IconComponent,
  size = 16,
  variant,
  className,
  ...props
}: IconProps) => {
  const IconElement = IconComponent;
  return (
    <IconElement
      className={cn(iconVariants({ variant }), className)}
      aria-hidden="true"
      size={size}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
