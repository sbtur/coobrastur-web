'use client';
import { useSearchParams } from 'next/navigation';

import { Image } from '@components/image';

import { ACCOMMODATIONSDETAILS } from '@mocks/accommodations/accommodations-details';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from '@ui/components/data-display/caroussel';
import { Dialog } from '@ui/components/data-display/dialog';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Link } from '@ui/components/data-entry/link';
import { ArrowRight, X } from '@ui/lib/icons';

export interface AccommodationDialogMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccommodationDialogMobile = ({
  isOpen,
  onClose,
}: AccommodationDialogMobileProps) => {
  const searchParams = useSearchParams();

  const hotel = ACCOMMODATIONSDETAILS.find(
    hotel => hotel.id === Number(searchParams.get('h')),
  );

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Content
        className="h-full p-0 gap-0"
        hideCloseButton
        onEscapeKeyDown={onClose}
        onInteractOutside={onClose}
      >
        <Dialog.Close
          asChild
          className="absolute right-[5px] -top-[40px] z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <button onClick={onClose}>
            <Icon icon={X} className="h-8 w-8" variant="white" />
            <span className="sr-only">Fechar</span>
          </button>
        </Dialog.Close>
        <div>
          <div className="h-[285px] rounded-t-[20px]">
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

          <div className="mt-5 pb-[50px] px-4 max-h-[450px] overflow-y-auto">
            <Dialog.Header className="text-left items-start">
              <Dialog.Title asChild className="text-lg">
                <Title as="h2" size="xs">
                  {hotel?.name}
                </Title>
              </Dialog.Title>
              <Dialog.Description asChild>
                <Text size="sm" className="text-text-body">
                  {hotel?.street}
                </Text>
              </Dialog.Description>
            </Dialog.Header>

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
        <div className="w-full fixed bottom-0 bg-white">
          <Link href="/accommodation" className="py-6 pl-5">
            Ir para a página do hotel <Icon icon={ArrowRight} />
          </Link>
          <Button size="lg" className="h-[80px] w-full rounded-none">
            Assine e planeje sua viagem{' '}
            <Icon icon={ArrowRight} variant="white" />
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
