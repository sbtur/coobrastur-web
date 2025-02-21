import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const headingVariants = cva('w-full flex flex-col gap-3 mx-auto', {
  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center',
      right: 'items-end text-right',
    },
    spacing: {
      sm: 'mb-2',
      md: 'mb-3',
      lg: 'mb-4',
      xl: 'mb-6',
    },
    defaultVariants: {
      align: 'left',
      spacing: 'md',
    },
  },
} as const);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  as?: 'header' | 'div';
  className?: string;
}

export const Heading = ({
  children,
  as: Component = 'header',
  align,
  spacing,
  className,
}: HeadingProps) => {
  return (
    <Component className={cn(headingVariants({ align, spacing }), className)}>
      {children}
    </Component>
  );
};
