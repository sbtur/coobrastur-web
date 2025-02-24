import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

import { DialogContent } from '../../dialog';

const contentVariants = cva('', {
  variants: {
    size: {
      xl: 'max-w-6xl',
      lg: 'max-w-4xl',
      md: 'max-w-3xl',
      sm: 'max-w-2xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export interface ContentProps extends VariantProps<typeof contentVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Content = ({ children, size, className }: ContentProps) => {
  return (
    <DialogContent className={cn(contentVariants({ size }), className)}>
      {children}
    </DialogContent>
  );
};

Content.displayName = 'DialogContent';
