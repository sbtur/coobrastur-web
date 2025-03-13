'use client';

import { HotelCard } from '@components/HotelCard';
import { HotelDialog } from '@components/HotelDialog';
import { useHotelListDetail } from '@hooks/useHotelListDetail';

import { ACCOMMODATIONS } from '@mocks/accommodations/accommodations';
import { Container } from '@ui/components/Layouts/Container';

export const HotelList = () => {
  const { isEnabled, handleOpenHotel, handleCloseHotel } = useHotelListDetail();

  return (
    <Container as="section" padding="lg" className="bg-background pt-0 lg:pt-0">
      {isEnabled && (
        <HotelDialog isOpen={isEnabled} onClose={handleCloseHotel} />
      )}
      <Container
        size="xl"
        className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10"
      >
        {ACCOMMODATIONS.map(accommodation => (
          <HotelCard
            onClick={handleOpenHotel}
            accommodation={accommodation}
            key={accommodation.id}
          />
        ))}
      </Container>
    </Container>
  );
};
