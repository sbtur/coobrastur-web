import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const linkVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      primary: 'text-highlight hover:text-highlight-hover',
      secondary: 'text-secondary-300 hover:text-secondary-hover',
      neutral: 'text-white hover:text-neutral',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export interface LinkProps extends VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Link = ({
  children,
  href,
  variant = 'primary',
  size,
  className,
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn(linkVariants({ variant, size }), className)}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
