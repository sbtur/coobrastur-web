'use client';

import { AccommodationDetail } from '@coobrastur/types-shared';

import { AccommodationCard } from '@components/accommodation-card';
import { AccommodationDialog } from '@components/accommodation-dialog';
import { useHotelListDetail } from '@hooks/use-hotel-list-detail';

import { Container } from '@ui/components/layouts/container';
import { Content } from '@ui/components/layouts/content';

type AccommodationListProps = {
  accommodations: AccommodationDetail[];
};

export const AccommodationList = ({
  accommodations,
}: AccommodationListProps) => {
  const { isEnabled, handleOpenHotel, handleCloseHotel, toggle } =
    useHotelListDetail();

  return (
    <Container as="section" className="flex flex-col h-full pt-0 pb-8 lg:pb-14">
      <Content className="flex flex-col flex-1 px-4 lg:px-0">
        {isEnabled && (
          <AccommodationDialog
            isOpen={isEnabled}
            onClose={handleCloseHotel}
            onOpenChange={toggle}
          />
        )}
        <div className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
          {accommodations.map(accommodation => (
            <AccommodationCard
              onClick={handleOpenHotel}
              accommodation={accommodation}
              key={accommodation.id}
            />
          ))}

          <div className="col-span-full flex items-center justify-center h-full text-3xl font-bold text-primary-300">
            <div>
              Hotel não encontrado!
              <br />
              Faça uma nova busca.
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};
