import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@coobrastur/ui/lib/utils';

const badgeVariants = cva(
  'uppercase inline-flex items-center justify-center rounded px-3 py-2 text-xs font-semibold transition-colors gap-2',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-primary-100',
        secondary: 'bg-primary text-secondary-100',
        outline: 'border-2 border-primary-100 text-primary-100',
        success: 'bg-success text-success-100',
        danger: 'bg-danger text-danger-100',
        warning: 'bg-warning text-warning-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  } as const,
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: React.ReactNode;
}

export const Badge = ({ className, variant, children }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)}>{children}</div>
  );
};
