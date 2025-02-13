import * as React from 'react';
import { Icon, Title } from '@workspace/ui/components';
import { Text } from '@workspace/ui/components';
import { cn } from '@workspace/ui/lib/utils';
import { MD } from '@workspace/ui/lib/icons';
import { cva, VariantProps } from 'class-variance-authority';

const hotelCardVariants = cva('', {
  variants: {
    align: {
      left: 'items-start text-left justify-start',
      center: 'items-center text-center justify-center',
      right: 'items-end text-right justify-end',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

const imageVariants = cva('relative w-full rounded-xl overflow-hidden', {
  variants: {
    size: {
      small: 'h-[260px]',
      medium: 'h-[415px]',
      large: 'h-[600px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type HotelCardVariants = VariantProps<typeof hotelCardVariants> &
  VariantProps<typeof imageVariants>;

export interface HotelCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    HotelCardVariants {
  title: string;
  address: string;
  image: {
    src: string;
    alt: string;
  };
  renderImage?: (props: {
    src: string;
    alt: string;
    className: string;
  }) => React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

const defaultRenderImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => <img src={src} alt={alt} className={className} />;

export const HotelCard = ({
  className,
  title,
  address,
  image,
  renderImage = defaultRenderImage,
  actionLabel = 'More details',
  onAction,
  align = 'center',
  size,
  ...props
}: HotelCardProps): JSX.Element => {
  const [isLikedButtonHovered, setIsLikedButtonHovered] = React.useState(false);

  return (
    <div
      className={cn(
        'group relative flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white transition-all hover:shadow-md',
        className
      )}
      {...props}
    >
      <div className={imageVariants({ size })}>
        {renderImage({
          src: image.src,
          alt: image.alt,
          className:
            'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
        })}
        <button
          type='button'
          className='absolute h-10 w-10 left-4 top-4 rounded-full bg-white flex items-center justify-center appearance-none border-0 p-0'
          onMouseEnter={() => setIsLikedButtonHovered(!isLikedButtonHovered)}
          onMouseLeave={() => setIsLikedButtonHovered(!isLikedButtonHovered)}
          onClick={() => console.log('Saved to favorites')}
        >
          <Icon
            icon={
              isLikedButtonHovered
                ? MD.MdOutlineFavorite
                : MD.MdOutlineFavoriteBorder
            }
            color='neutral'
          />
        </button>
      </div>
      <div
        className={cn('flex flex-col gap-2 p-4', hotelCardVariants({ align }))}
      >
        <Title as='h3' size='xsmall'>
          {title}
        </Title>
        <Text>{address}</Text>
        <button
          onClick={onAction}
          className={cn(
            'mt-2 inline-flex items-center text-blue-500 hover:text-blue-600',
            hotelCardVariants({ align })
          )}
        >
          {actionLabel}
          <Icon icon={MD.MdArrowRightAlt} />
        </button>
      </div>
    </div>
  );
};

HotelCard.displayName = 'HotelCard';
