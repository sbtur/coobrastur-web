import { Image } from '@/shared/components/image';

import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';

type ImageGalleryProps = {
  images: string[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="w-full lg:max-w-[890px] h-[290px] lg:h-[450px]">
      <Carousel
        className="h-full"
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent className="h-full">
          {images.map(image => (
            <CarouselItem key={image} className="base-full">
              <Image
                src={image}
                width={790}
                height={450}
                alt="Intercity"
                className="lg:rounded-[10px] h-full w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden lg:block" />
        <CarouselNext className="right-4 hidden lg:block" />
        <CarouselDot className="absolute bottom-4" />
      </Carousel>
    </div>
  );
};
