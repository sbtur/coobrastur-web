import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

export const badgeVariants = cva(
  'w-fit uppercase inline-flex items-center justify-center rounded px-3 py-2 text-xs font-bold transition-colors gap-2',
  {
    variants: {
      variant: {
        default: 'bg-secondary-200 text-primary-200',
        secondary: 'bg-secondary-100 text-secondary-300',
        outline: 'border-2 border-primary-100 text-primary-100',
        success: 'bg-success-100 text-success-300',
        danger: 'bg-danger-100 text-danger-300',
        warning: 'bg-warning-100 text-warning-300',
        neutral: 'bg-neutral-200 text-neutral-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  } as const,
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  children: React.ReactNode;
};

export const Badge = ({ className, variant, children }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)}>{children}</div>
  );
};
