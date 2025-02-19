import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded px-3 py-2 text-xs font-semibold transition-colors gap-2',
  {
    variants: {
      variant: {
        default: 'bg-primary/20 text-primary',
        secondary: 'bg-secondary/20 text-secondary',
        outline: 'border border-primary text-primary',
        success: 'bg-success/20 text-success',
        danger: 'bg-danger/20 text-danger',
        warning: 'bg-warning/20 text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
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
