import { cva, type VariantProps } from 'class-variance-authority';

import { ICON_SIZES } from './constants';

import { LucideIcon } from '@ui/lib/icons';
import { cn } from '@ui/lib/utils';

const iconVariants = cva('inline-flex shrink-0', {
  variants: {
    variant: {
      primary: 'text-highlight group-[.hover]:text-highlight-hover',
      secondary: 'text-primary-100 group-[.hover]:text-secondary-hover',
      neutral: 'text-neutral-400 group-[.hover]:text-neutral-500',
      white: 'text-white group-[.hover]:text-neutral-100',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
} as const);

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps extends IconVariants {
  icon: LucideIcon;
  className?: string;
  size?: keyof typeof ICON_SIZES;
}

export const Icon = ({
  icon: IconComponent,
  size = 'md',
  variant,
  className,
  ...props
}: IconProps) => {
  const IconElement = IconComponent;
  return (
    <IconElement
      className={cn(iconVariants({ variant }), className)}
      aria-hidden="true"
      size={ICON_SIZES[size]}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
