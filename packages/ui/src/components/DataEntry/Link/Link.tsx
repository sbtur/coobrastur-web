import { forwardRef, type ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const linkVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      primary: 'text-highlight hover:text-highlight-hover',
      secondary: 'text-secondary-300 hover:text-secondary-hover',
      neutral: 'text-text',
      white: 'text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
} as const);

export interface LinkProps extends VariantProps<typeof linkVariants> {
  children: ReactNode;
  href?: string;
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, variant, size, className, ...props }, ref) => {
    return (
      <a
        className={cn(linkVariants({ variant, size }), className)}
        href={href}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
