import { cva, type VariantProps } from 'class-variance-authority';

import { LucideIcon } from '@coobrastur/ui/lib/icons';
import { cn } from '@coobrastur/ui/lib/utils';

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

export const IconSize = {
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

type IconVariants = VariantProps<typeof iconVariants>;

export interface IconProps extends IconVariants {
  icon: LucideIcon;
  className?: string;
  size?: keyof typeof IconSize;
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
      size={IconSize[size]}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
