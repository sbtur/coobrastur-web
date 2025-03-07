import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@ui/lib/utils';

const titleVariants = cva('font-bold', {
  variants: {
    as: {
      h1: 'text-5xl', // 48px
      h2: 'text-4xl', // 36px
      h3: 'text-3xl', // 30px
      h4: 'text-2xl', // 24px
      h5: 'text-lg', // 18px
      h6: 'text-base', // 16px
    },
    size: {
      xs: 'text-lg', // 18px
      sm: 'text-2xl', // 24px
      md: 'text-3xl', // 30px
      lg: 'text-2xl lg:text-4xl', //24px-36px
      xl: 'text-3xl xl:text-[40px]', //30px-40px
      '2xl': 'text-4xl xl:text-6xl', //40px-60px
    },
    variant: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      success: 'text-text-success',
      warning: 'text-text-warning',
      danger: 'text-text-danger',
      white: 'text-neutral-100',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    as: 'h2',
    size: 'md',
    variant: 'primary',
  },
} as const);

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
  align,
  children,
  ...props
}: TitleProps) => {
  const Component = as || 'h2';

  return (
    <Component
      className={cn(
        titleVariants({ as, size, variant, align }),
        truncate && 'truncate',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Title.displayName = 'Title';
