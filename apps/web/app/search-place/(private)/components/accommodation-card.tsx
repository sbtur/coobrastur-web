import { ArrowRight, CalendarMinus, Receipt } from 'lucide-react';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@coobrastur/ui/components/data-display/collapsible';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { AccommodationFeatures } from '@/@core/accommodations/use-cases/accommodation-features.use-case';
import { AccommodationListDetailedUseCaseResponse } from '@/@core/accommodations/use-cases/accommodation-list-detailed.use-case';
import { Image } from '@/shared/components/image';
import { Link } from '@/shared/components/link';
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
} from '@/shared/utils/plans/categories';

import { AvailableDatesButton } from './available-dates/available-dates-button';
import { ByRequestButton } from './by-request-dialog/by-request-button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/components/data-display/caroussel';

type AccommodationCardProps = {
  accommodation: AccommodationListDetailedUseCaseResponse;
};

export const AccommodationCard = ({
  accommodation,
}: AccommodationCardProps) => {
  const {
    gallery,
    name,
    category,
    street,
    features,
    availability,
    availabilityDates,
    byRequest,
    extra,
    totalDays,
  } = accommodation;

  const byResquestDialogDescription = {
    name,
    category,
    street,
    totalDays,
  };

  const availableDatesDialogDescription = {
    name,
    street,
  };

  return (
    <div className="min-w-[350px] lg:flex min-h-[330px]">
      <div className="w-full h-[180px] lg:h-full lg:w-[290px] relative">
        <Badge
          variant={CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS]}
          className="lg:hidden absolute top-3 left-3 z-10"
        >
          {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
        </Badge>
        <Carousel className="h-full" opts={{ loop: true }}>
          <div className="h-full rounded-t-[10px] lg:rounded-r-none lg:rounded-s-[10px] overflow-hidden">
            <CarouselContent className="h-full">
              {gallery.map(image => (
                <CarouselItem key={image} className="flex-[0_0_100%] group p-0">
                  <Image
                    src={image}
                    alt={name}
                    width={290}
                    height={330}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="hidden lg:block -left-6" />
          <CarouselNext className="hidden lg:block -right-6" />
        </Carousel>
      </div>
      <div className="flex-1 border border-border rounded-b-[10px] lg:rounded-b-none lg:rounded-e-[10px] px-7 py-6">
        <Badge
          variant={CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS]}
          className="hidden lg:block mb-4"
        >
          {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
        </Badge>
        <Title className="text-[28px]">{name}</Title>
        <Text className="mt-3">{street}</Text>

        <Link
          href="/detalhes"
          className="mt-3 text-highlight flex items-center gap-2"
        >
          Ver mais detalhes
          <Icon icon={ArrowRight} variant="highlight" />
        </Link>

        <div className="flex flex-wrap gap-2 mt-4">
          {features.map((feature: AccommodationFeatures) => (
            <div className="flex items-center gap-2" key={feature.id}>
              <Icon icon={feature.icon} size="lg" />
              <Text as="span" size="sm">
                {feature.name}
              </Text>
            </div>
          ))}
        </div>

        <Separator className="mt-8 mb-4" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <div>
            <Text
              size="xl"
              className="font-primary font-bold text-highlight items-center"
            >
              {totalDays} {totalDays === 1 ? 'Diária' : 'Diárias'}
            </Text>

            {extra > 0 ? (
              <Text className="flex items-center" size="sm">
                <Icon icon={Receipt} size="sm" />
                {extra.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                <Text as="span" className="font-bold underline ml-1">
                  adicionais
                </Text>
              </Text>
            ) : null}
          </div>

          <div className="flex gap-2">
            {availabilityDates ? (
              <AvailableDatesButton
                description={availableDatesDialogDescription}
              />
            ) : null}

            {byRequest ? (
              <ByRequestButton accommodation={byResquestDialogDescription} />
            ) : null}

            {availability ? (
              <Button className="w-full lg:w-auto">
                Reservar
                <Icon icon={ArrowRight} variant="white" />
              </Button>
            ) : null}

            {!availability && !byRequest ? (
              <Button variant="secondary" disabled>
                Indisponível{' '}
                <Icon icon={CalendarMinus} className="w-4 h-4 text-white" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
