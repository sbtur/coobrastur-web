import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const headingVariants = cva('', {
  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center',
      right: 'items-end text-right',
    },
    spacing: {
      small: 'mb-2',
      medium: 'mb-3',
      large: 'mb-4',
      xlarge: 'mb-6',
    },
    defaultVariants: {
      align: 'left',
      spacing: 'medium',
    },
  },
});

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
    <Component
      className={cn(
        headingVariants({ align, spacing }),
        'w-full flex flex-col gap-3 mx-auto',
        className,
      )}
    >
      {children}
    </Component>
  );
};
