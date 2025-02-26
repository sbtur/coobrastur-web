import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const dotVariants = cva('w-2 h-2 rounded-full', {
  variants: {
    variant: {
      default: 'bg-neutral-600',
      white: '',
    },
    selected: {
      true: 'bg-neutral-600',
      false: 'bg-neutral-300',
    },
  },
  compoundVariants: [
    {
      variant: 'white',
      selected: true,
      className: 'bg-white',
    },
  ],
  defaultVariants: {
    variant: 'default',
    selected: false,
  },
});

export interface ButtonDotProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dotVariants> {
  children?: React.ReactNode;
  className?: string;
  index: number;
  selectedIndex: number;
}

export interface ButtonDotWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const ButtonDot = ({
  children,
  className,
  index,
  selectedIndex,
  variant,
  ...props
}: ButtonDotProps) => {
  return (
    <button
      type="button"
      className={cn(
        dotVariants({ variant, selected: selectedIndex === index }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonDotWrapper = ({
  children,
  className,
  ...props
}: ButtonDotWrapperProps) => {
  return (
    <div
      className={cn(
        'flex gap-3 items-center justify-center w-full mt-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
