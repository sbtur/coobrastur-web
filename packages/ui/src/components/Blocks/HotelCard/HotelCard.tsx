import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import {
  Bookmark,
  Icon,
  Image,
  ImageProps,
  Link,
  Text,
  Title,
} from '@workspace/ui/components';
import { MdArrowRightAlt } from '@workspace/ui/lib/icons';
import { cn } from '@workspace/ui/lib/utils';

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
  image: Omit<ImageProps, 'renderComponent'>;
  href: string;
  renderImage?: (props: ImageProps) => React.ReactElement;
  actionLabel?: string;
}

export const HotelCard = ({
  className,
  title,
  address,
  image,
  renderImage,
  actionLabel = 'More details',
  href,
  align = 'center',
  size,
  ...props
}: HotelCardProps): JSX.Element => {
  return (
    <div
      className={cn(
        'group relative flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white transition-all hover:shadow-md',
        className,
      )}
      {...props}
    >
      <div className={imageVariants({ size })}>
        <Image
          {...image}
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          renderComponent={renderImage}
        />
        <Bookmark
          className="absolute left-4 top-4"
          onClick={() => console.log('Saved to favorites')}
        />
      </div>
      <div
        className={cn('flex flex-col gap-2 p-4', hotelCardVariants({ align }))}
      >
        <Title as="h3" size="xsmall">
          {title}
        </Title>
        <Text>{address}</Text>
        <Link href={href} className={hotelCardVariants({ align })}>
          {actionLabel}
          <Icon icon={MdArrowRightAlt} />
        </Link>
      </div>
    </div>
  );
};

HotelCard.displayName = 'HotelCard';
