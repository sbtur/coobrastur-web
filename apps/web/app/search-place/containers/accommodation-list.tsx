'use client';

import { AccommodationCard } from '@components/accommodation-card';

import { AccommodationDialog } from '@/shared/components/accommodation-dialog/accommodation-dialog';
import { useHotelListDetail } from '@/shared/hooks/use-hotel-list-detail';

import { useSearchProvider } from '../providers/search-provider';
import AccommodationListSkeleton from './accommodation-list-skeleton';

import { Container } from '@ui/components/layouts/container';
import { Content } from '@ui/components/layouts/content';

export const AccommodationList = () => {
  const { isEnabled, handleOpenHotel, handleCloseHotel, toggle } =
    useHotelListDetail();
  const { accommodationList, isAccommodationListLoading } = useSearchProvider();

  if (isAccommodationListLoading) {
    return <AccommodationListSkeleton />;
  }

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
          {accommodationList?.map(accommodation => (
            <AccommodationCard
              onClick={handleOpenHotel}
              accommodation={accommodation}
              key={accommodation.id}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
};
