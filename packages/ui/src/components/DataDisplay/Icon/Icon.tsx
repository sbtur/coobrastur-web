import type { IconType, IconBaseProps } from 'react-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@workspace/ui/lib/utils';

const iconVariants = cva('inline-flex shrink-0', {
  variants: {
    size: {
      sm: 'text-base', // 16px
      md: 'text-xl', // 20px
      lg: 'text-2xl', // 24px
      xl: 'text-3xl', // 30px
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps
  extends Omit<IconBaseProps, 'color' | 'size'>,
    IconVariants {
  /**
   * The icon component from react-icons
   * @example icon={MdHome}
   */
  icon: IconType;
  className?: string;
}

export const Icon = ({
  icon: IconComponent,
  size,
  color,
  className,
  ...props
}: IconProps) => {
  return (
    <IconComponent
      className={cn(iconVariants({ size, color }), className)}
      aria-hidden='true'
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
