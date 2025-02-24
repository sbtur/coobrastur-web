import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';

const iconWrapperVariants = cva(
  'flex items-center justify-center appearance-none border-0 rounded-full bg-white transition-colors shadow-xl',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  } as const,
);

export interface IconWrapperProps
  extends VariantProps<typeof iconWrapperVariants>,
    React.HTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'div';
  children: React.ReactElement;
  className?: string;
}

export const IconWrapper = ({
  children,
  size,
  className,
  as = 'div',
}: IconWrapperProps) => {
  const Component = as;

  return (
    <Component className={cn(iconWrapperVariants({ size }), className)}>
      {children}
    </Component>
  );
};
