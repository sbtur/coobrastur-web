import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const linkVariants = cva('mt-2 inline-flex items-center', {
  variants: {
    variant: {
      primary: 'text-primary hover:text-primary-hover',
      secondary: 'text-secondary hover:text-secondary-hover',
      neutral: 'text-white hover:text-gray-400',
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
  renderComponent?: (props: LinkProps) => React.ReactElement;
}

export const Link = ({
  children,
  href,
  renderComponent,
  variant = 'primary',
  size,
  ...props
}: LinkProps) => {
  const linkProps = {
    children,
    href,
    className: cn(linkVariants({ variant, size }), props.className),
    ...props,
  };

  if (renderComponent) {
    return renderComponent(linkProps);
  }

  return <a {...linkProps}>{children}</a>;
};
