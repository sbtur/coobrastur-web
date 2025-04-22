import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm flex items-center gap-3',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        danger:
          'border-danger-200 text-danger-300 dark:border-danger-300 [&>svg]:text-danger-200 bg-danger-100',
        warning:
          'border-warning-200 text-warning-300 dark:border-warning-300 [&>svg]:text-warning-200 bg-warning-100',
        success:
          'border-success-200 text-success-300 dark:border-success-300 [&>svg]:text-success-200 bg-success-100',
        info: 'border-info-200 text-info-300 dark:border-info-300 [&>svg]:text-info-200 bg-info-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
