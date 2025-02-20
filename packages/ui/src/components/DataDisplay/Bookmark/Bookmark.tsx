'use client';

import { useState } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { Icon } from '@workspace/ui/components';
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from '@workspace/ui/lib/icons';
import { cn } from '@workspace/ui/lib/utils';

const bookmarkVariants = cva(
  'flex items-center justify-center appearance-none border-0 p-0 rounded-full bg-white transition-colors',
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

export interface BookmarkProps extends VariantProps<typeof bookmarkVariants> {
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const Bookmark = ({
  size,
  onClick,
  active = false,
  className,
}: BookmarkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={cn(bookmarkVariants({ size }), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Icon
        icon={active || isHovered ? MdOutlineFavorite : MdOutlineFavoriteBorder}
        color="neutral"
        className="w-1/2 h-1/2 transition-transform hover:scale-110"
      />
    </button>
  );
};
