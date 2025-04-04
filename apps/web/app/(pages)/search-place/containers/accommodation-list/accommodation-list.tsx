'use client';

import { AccommodationCard } from '@components/accommodation-card';
import { AccommodationDialog } from '@components/accommodation-dialog';
import { useHotelListDetail } from '@hooks/use-hotel-list-detail';

import { ACCOMMODATIONS } from '@mocks/accommodations/accommodations';
import { Container } from '@ui/components/layouts/container';

export const AccommodationList = () => {
  const { isEnabled, handleOpenHotel, handleCloseHotel } = useHotelListDetail();

  return (
    <Container as="section" className="pt-0 pb-8 lg:pb-14">
      {isEnabled && (
        <AccommodationDialog isOpen={isEnabled} onClose={handleCloseHotel} />
      )}
      <div className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
        {ACCOMMODATIONS.map(accommodation => (
          <AccommodationCard
            onClick={handleOpenHotel}
            accommodation={accommodation}
            key={accommodation.id}
          />
        ))}
      </div>
    </Container>
  );
};
