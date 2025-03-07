import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@coobrastur/ui/lib/utils';

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

type BaseProps = VariantProps<typeof iconWrapperVariants> & {
  children: React.ReactElement;
  className?: string;
};

type ButtonWrapperProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
  };

type DivWrapperProps = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: 'div';
  };

export type IconWrapperProps = ButtonWrapperProps | DivWrapperProps;

export const IconWrapper = ({
  children,
  size,
  className,
  as = 'div',
  ...props
}: IconWrapperProps) => {
  const Component = as;

  return (
    <Component
      className={cn(iconWrapperVariants({ size }), className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
