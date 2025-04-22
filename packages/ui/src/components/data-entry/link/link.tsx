import {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  type ReactNode,
} from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

const linkVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      highlight:
        'text-highlight hover:text-highlight-hover [&_svg]:text-current',
      secondary:
        'text-secondary-300 hover:text-secondary-hover [&_svg]:text-current',
      neutral: 'text-text-body hover:text-text-body [&_svg]:text-current',
      white: 'text-white [&_svg]:text-current',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'highlight',
    size: 'md',
  },
} as const);

export interface LinkProps extends VariantProps<typeof linkVariants> {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, href, variant, size, className, asChild = false, ...props },
    ref,
  ) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<LinkProps>, {
        ...props,
      });
    }

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
