import { ArrowRight, CalendarMinus, Receipt } from 'lucide-react';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
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

import { ByRequestButton } from './by-request-dialog/by-request-button';
import { ByRequestDialog } from './by-request-dialog/by-request-dialog';

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

  return (
    <div className="flex min-h-[330px]">
      <div className="w-[290px]">
        <Carousel className="h-full" opts={{ loop: true }}>
          <div className="h-full rounded-s-2xl overflow-hidden">
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
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
      <div className="flex-1 border border-border rounded-e-[10px] px-7 py-6">
        <Badge
          variant={CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS]}
          className="mb-4"
        >
          {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
        </Badge>
        <Title>{name}</Title>
        <Text className="mt-3">{street}</Text>

        <Link
          href="/detalhes"
          className="mt-3 text-highlight flex items-center gap-2"
        >
          Ver mais detalhes
          <Icon icon={ArrowRight} variant="primary" />
        </Link>

        <div className="flex flex-wrap gap-2 mt-4">
          {features.map((feature: AccommodationFeatures) => (
            <div className="space-x-2" key={feature.id}>
              <Icon icon={feature.icon} size="lg" />
              <Text as="span" size="sm">
                {feature.name}
              </Text>
            </div>
          ))}
        </div>

        <Separator className="mt-8 mb-4" />

        <div className="flex justify-between items-center">
          <div className="">
            <Text size="xl" className="font-bold text-highlight items-center">
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
              <Button variant="outline-secondary">Datas disponíveis</Button>
            ) : null}

            {byRequest ? (
              <ByRequestButton accommodation={byResquestDialogDescription} />
            ) : null}

            {availability ? (
              <Button>
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
