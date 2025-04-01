'use client';

import { AccommodationCard } from '@components/accommodation-card';
import { AccommodationDialog } from '@components/accommodation-dialog';
import { useHotelListDetail } from '@hooks/use-hotel-list-detail';

import { ACCOMMODATIONS } from '@mocks/accommodations/accommodations';
import { Container } from '@ui/components/layouts/container';

export const AccommodationList = () => {
  const { isEnabled, handleOpenHotel, handleCloseHotel } = useHotelListDetail();

  return (
    <Container as="section" padding="lg" className="bg-background pt-0 lg:pt-0">
      {isEnabled && (
        <AccommodationDialog isOpen={isEnabled} onClose={handleCloseHotel} />
      )}
      <Container
        size="xl"
        className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10"
      >
        {ACCOMMODATIONS.map(accommodation => (
          <AccommodationCard
            onClick={handleOpenHotel}
            accommodation={accommodation}
            key={accommodation.id}
          />
        ))}
      </Container>
    </Container>
  );
};
