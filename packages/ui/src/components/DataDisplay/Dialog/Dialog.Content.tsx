import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

import { DialogContent } from '../../dialog';

import { DialogContentProps } from '@radix-ui/react-dialog';

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

export interface ContentProps
  extends DialogContentProps,
    VariantProps<typeof contentVariants> {
  children: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
}

export const Content = ({
  children,
  size,
  className,
  hideCloseButton = false,
  ...props
}: ContentProps) => {
  return (
    <DialogContent
      {...props}
      className={cn(
        contentVariants({ size }),
        `${hideCloseButton && '[&>button[aria-label="Close"]]:hidden'}`,
        className,
      )}
    >
      {children}
    </DialogContent>
  );
};

Content.displayName = 'DialogContent';
