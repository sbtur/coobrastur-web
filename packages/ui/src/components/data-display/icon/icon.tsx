import Image from 'next/image';

import { cva, type VariantProps } from 'class-variance-authority';

import { ICON_SIZES } from './constants';

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
  icon: React.ElementType | string;
  className?: string;
  size?: keyof typeof ICON_SIZES;
  alt?: string;
}

export const Icon = ({
  icon,
  size = 'md',
  variant,
  className,
  alt = '',
  ...props
}: IconProps) => {
  const iconSize = ICON_SIZES[size];

  if (typeof icon === 'string') {
    return (
      <Image
        src={icon}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className={cn(iconVariants({ variant }), className)}
        {...props}
      />
    );
  }

  const IconElement = icon;
  return (
    <IconElement
      className={cn(iconVariants({ variant }), className)}
      aria-hidden="true"
      size={iconSize}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
