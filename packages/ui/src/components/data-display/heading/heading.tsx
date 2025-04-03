import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

const headingVariants = cva('w-full flex flex-col gap-4 mx-auto px-8', {
  variants: {
    spacing: {
      sm: 'mb-2',
      md: 'mb-3',
      lg: 'mb-4',
      xl: 'mb-6',
    },
    defaultVariants: {
      spacing: 'md',
    },
  },
} as const);

export type HeadingProps = VariantProps<typeof headingVariants> & {
  children: React.ReactNode;
  as?: 'header' | 'div';
  className?: string;
};

export const Heading = ({
  children,
  as: Component = 'header',
  spacing,
  className,
}: HeadingProps) => {
  return (
    <Component
      className={cn(headingVariants({ spacing }), 'heading', className)}
    >
      {children}
    </Component>
  );
};
