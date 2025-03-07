import { cloneElement, isValidElement, ReactElement } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@coobrastur/ui/lib/utils';

const imageVariants = cva('relative w-full rounded-xl overflow-hidden', {
  variants: {
    size: {
      sm: 'h-[260px]',
      md: 'h-[415px]',
      lg: 'h-[600px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
} as const);

type ImageElement = ReactElement<{
  src: string;
  alt: string;
  className?: string;
}>;

export interface HotelImageProps extends VariantProps<typeof imageVariants> {
  children: ImageElement;
}

export const HotelImage = ({ children, size }: HotelImageProps) => {
  const imageClassName =
    'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105';

  const image = isValidElement(children)
    ? cloneElement(children, {
        className: cn(children.props.className, imageClassName),
      })
    : children;

  return <div className={cn(imageVariants({ size }))}>{image}</div>;
};
