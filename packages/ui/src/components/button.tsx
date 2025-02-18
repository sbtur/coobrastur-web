import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-hover',
        danger: 'bg-danger text-white hover:bg-danger-hover',
        outline:
          'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        success: 'text-white bg-success hover:bg-success-hover',
        warning: 'text-white bg-warning hover:bg-warning-hover',
        white: 'bg-white text-secondary hover:text-secondary-hover',
        'outline-white': 'border-2 border-white bg-transparent text-white',
      },
      size: {
        default: 'h-10 px-4 py-3 text-base',
        sm: 'h-9 px-3 py-3 text-sm',
        lg: 'h-11 px-8 py-4 text-lg',
        icon: 'px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
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
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
