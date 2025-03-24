import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@ui/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-neutral-400 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-highlight text-white hover:bg-highlight-hover',
        secondary: 'bg-primary-100 text-white hover:bg-primary-hover',
        danger: 'bg-danger text-white hover:bg-danger-hover',
        outline: 'border-2 border-highlight bg-white text-highlight',
        ghost: 'text-text bg-white hover:text-neutral-300',
        link: 'text-highlight underline-offset-4 hover:underline',
        success: 'text-white bg-success hover:bg-success-hover',
        warning: 'text-white bg-warning hover:bg-warning-hover',
        white: 'bg-white text-highlight hover:text-highlight-hover',
        'outline-white': 'border-2 border-white bg-transparent text-white',
        'outline-secondary':
          'border-2 border-primary-100 bg-transparent text-primary-100',
      },
      size: {
        default: 'h-12 px-4 py-3 text-base',
        sm: 'h-12 px-2 py-2 text-base',
        lg: 'h-12 px-8 py-4 text-lg',
        icon: 'px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  } as const,
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
