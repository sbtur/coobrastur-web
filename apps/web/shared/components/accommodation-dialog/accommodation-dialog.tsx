'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@coobrastur/ui/components/data-display/dialog';

import { Image } from '@components/image';

import { buttonsAnimations, galleryAnimations } from './animations';

import { AnimatePresence, motion } from '@lib/motion';
import { ACCOMMODATIONSDETAILS } from '@mocks/accommodations/accommodations-details';
import { Bookmark } from '@ui/components/data-display/bookmark';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';
import { Icon, IconWrapper } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Link } from '@ui/components/data-entry/link';
import { ArrowRight, ChevronLeft, Share2, Table, X } from '@ui/lib/icons';

export interface HotelDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

export const AccommodationDialog = ({
  isOpen,
  onOpenChange,
  onClose,
}: HotelDialogProps) => {
  const [isShowGallery, setIsShowGallery] = useState(false);
  const searchParams = useSearchParams();

  const hotel = ACCOMMODATIONSDETAILS.find(
    hotel => hotel.id === Number(searchParams.get('h')),
  );

  const handleShowGallery = () => {
    setIsShowGallery(!isShowGallery);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[830px] h-full md:h-auto p-0 gap-0">
        <DialogClose onClick={onClose} />
        <div className="overflow-y-auto flex rounded-[20px] justify-between relative">
          <motion.div
            variants={galleryAnimations}
            initial="contentVisible"
            animate={isShowGallery ? 'contentHidden' : 'contentVisible'}
            className="h-full grid justify-between"
          >
            <motion.div
              variants={buttonsAnimations}
              initial="visible"
              animate={isShowGallery ? 'hidden' : 'visible'}
              exit="visible"
              className="group-[.w-0]:hidden p-8 space-y-6"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl text-left text-primary-300 font-primary font-bold">
                  {hotel?.name}
                </DialogTitle>
                <DialogDescription className="text-left">
                  {hotel?.street}
                </DialogDescription>
              </DialogHeader>

              <div className="py-4 pr-4 h-[280px] overflow-y-auto">
                <Text size="sm">{hotel?.description}</Text>

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
              <div className="text-left">
                <Link href="/accommodation">
                  Ir para a página do Hotel <Icon icon={ArrowRight} />
                </Link>
              </div>
            </motion.div>
            <Separator />
            <DialogFooter className="grid h-[90px] px-0 gap-3 items-center justify-start"></DialogFooter>
          </motion.div>

          <motion.div
            variants={galleryAnimations}
            initial="galleryClose"
            animate={isShowGallery ? 'galleryOpen' : 'galleryClose'}
            transition={{
              duration: 0.5,
            }}
            className="full relative pb-[70px] md:pb-0 group"
          >
            <div className="hidden md:block absolute top-0 right-0 p-4 w-full z-10">
              <AnimatePresence mode="wait">
                {!isShowGallery ? (
                  <motion.div
                    variants={buttonsAnimations}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="gap-4 flex-wrap justify-end"
                  >
                    <IconWrapper
                      as="button"
                      onClick={handleShowGallery}
                      className="flex items-center gap-2"
                    >
                      <Icon icon={Table} />
                      Mostrar todas as fotos
                    </IconWrapper>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={buttonsAnimations}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex justify-between gap-4"
                  >
                    <IconWrapper
                      as="button"
                      onClick={handleShowGallery}
                      className="flex items-center gap-2"
                    >
                      <Icon icon={ChevronLeft} />
                      Voltar
                    </IconWrapper>

                    <motion.div
                      variants={buttonsAnimations}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="flex gap-4"
                    >
                      <Bookmark />
                      <IconWrapper as="button">
                        <Icon icon={Share2} />
                      </IconWrapper>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                      className="w-full h-full md:h-[570px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3" />
              <CarouselNext className="right-3" />
              <CarouselDot className="absolute bottom-[110px] z-10" />
            </Carousel>

            <Button
              size="lg"
              className="absolute bottom-0 left-0 right-0 h-[70px] md:h-[90px] rounded-none"
            >
              Assine e planeje sua viagem{' '}
              <Icon icon={ArrowRight} variant="white" />
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
