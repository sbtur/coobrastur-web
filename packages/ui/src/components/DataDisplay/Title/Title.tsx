import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@workspace/ui/lib/utils';

const titleVariants = cva('font-bold', {
  variants: {
    as: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
    size: {
      xsmall: 'text-lg',
      small: 'text-2xl',
      medium: 'text-3xl',
      large: 'text-4xl',
      xlarge: 'text-5xl',
      '2xlarge': 'text-6xl',
    },
    variant: {
      primary: 'text-primary-dark',
      secondary: 'text-secondary',
      neutral: 'text-white',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
  },
  defaultVariants: {
    as: 'h2',
    size: 'xlarge',
    variant: 'primary',
  },
});

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  truncate?: boolean;
}

export const Title = ({
  className,
  as,
  size,
  variant,
  truncate,
  children,
  ...props
}: TitleProps) => {
  const Component = as || 'h2';

  return (
    <Component
      className={cn(
        titleVariants({ as, size, variant }),
        truncate && 'truncate',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Title.displayName = 'Title';
