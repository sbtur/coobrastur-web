'use client';
import { useSearchParams } from 'next/navigation';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
} from '@coobrastur/ui/components/data-display/sheet';

import { Image } from '@components/image';

import { ACCOMMODATIONSDETAILS } from '@mocks/accommodations/accommodations-details';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from '@ui/components/data-display/caroussel';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Link } from '@ui/components/data-entry/link';
import { ArrowRight } from '@ui/lib/icons';

export interface AccommodationDialogMobileProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AccommodationDialogMobile = ({
  isOpen,
  onOpenChange,
}: AccommodationDialogMobileProps) => {
  const searchParams = useSearchParams();

  const hotel = ACCOMMODATIONSDETAILS.find(
    hotel => hotel.id === Number(searchParams.get('h')),
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange} key="bottom">
      <SheetOverlay>
        <SheetContent
          side="bottom"
          className="left-0 right-0 p-0 gap-0 border-none rounded-t-[20px]"
        >
          <div>
            <div className="h-[285px] rounded-t-[20px] overflow-hidden">
              <Carousel className="h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {hotel?.gallery.map(image => (
                    <CarouselItem
                      key={image}
                      className="flex-[0_0_100%] p-0 rounded-none relative"
                    >
                      <Image
                        src={image}
                        alt={hotel?.name}
                        width={355}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDot className="absolute bottom-[20px] z-10" />
              </Carousel>
            </div>

            <div className="mt-5 px-4 pb-[20px] max-h-[300px] overflow-y-auto">
              <SheetHeader className="text-left items-start">
                <SheetTitle className="text-left">{hotel?.name}</SheetTitle>
                <SheetDescription className="text-left">
                  {hotel?.street}
                </SheetDescription>
              </SheetHeader>

              <Text size="sm" className="mt-3">
                {hotel?.description}
              </Text>
              <Text size="sm" className="mt-3">
                {hotel?.description}
              </Text>
              <Text size="sm" className="mt-3">
                {hotel?.description}
              </Text>

              <div className="mt-6">
                <Title as="h3" size="xs">
                  Comodidades:
                </Title>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-text-body mt-4">
                  {hotel?.amenities.map(amenity => (
                    <li key={amenity}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full bg-white">
            <Link href="/accommodation" className="py-6 pl-5 font-bold">
              Ir para a página do hotel <Icon icon={ArrowRight} />
            </Link>
            <Button size="lg" className="h-[90px] w-full rounded-none">
              Assine e planeje sua viagem{' '}
              <Icon icon={ArrowRight} variant="white" />
            </Button>
          </div>
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
};
