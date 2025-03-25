import { cva, type VariantProps } from 'class-variance-authority';

import { useCarousel } from './Carousel';

import { cn } from '@ui/lib/utils';

const dotVariants = cva('w-2 h-2 rounded-full', {
  variants: {
    variant: {
      default: 'bg-neutral-600',
      white: '',
    },
    selected: {
      true: 'bg-neutral-600',
      false: 'bg-neutral-300',
    },
  },
  compoundVariants: [
    {
      variant: 'white',
      selected: true,
      className: 'bg-white',
    },
  ],
  defaultVariants: {
    variant: 'default',
    selected: false,
  },
});
export interface CarouselDotProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dotVariants> {
  className?: string;
}

export const CarouselDot = ({
  className,
  variant,
  ...props
}: CarouselDotProps) => {
  const { scrollSnaps, selectedIndex, onDotButtonClick } = useCarousel();

  return (
    <div
      className={cn(
        'flex gap-3 items-center justify-center w-full mt-4',
        className,
      )}
    >
      {scrollSnaps.map((_, index) => (
        <button
          type="button"
          className={cn(
            dotVariants({ variant, selected: selectedIndex === index }),
            className,
          )}
          key={index}
          onClick={() => onDotButtonClick(index)}
          {...props}
        />
      ))}
    </div>
  );
};
