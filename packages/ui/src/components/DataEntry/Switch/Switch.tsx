'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@ui/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
  {
    variants: {
      size: {
        default: 'h-6 w-11',
        sm: 'h-5 w-9',
        lg: 'h-7 w-[52px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        default: 'h-5 w-5',
        sm: 'h-4 w-4',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  thumbClassName?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size, thumbClassName, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ size, className }))}
    {...props}
    ref={ref}
    tabIndex={0}
    aria-label={props['aria-label'] || 'Toggle switch'}
  >
    <SwitchPrimitives.Thumb
      className={cn(switchThumbVariants({ size }), thumbClassName)}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = 'Switch';
