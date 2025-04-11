'use client';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { SearchX } from '@coobrastur/ui/lib/icons';

import { AccommodationCard } from '@components/accommodation-card';
import { AccommodationDialog } from '@components/accommodation-dialog';

import { useHotelListDetail } from '@/shared/hooks/use-hotel-list-detail';

import { useSearch } from '../../contexts/search-context';

import { Container } from '@ui/components/layouts/container';
import { Content } from '@ui/components/layouts/content';

export const AccommodationList = () => {
  const { accommodationList } = useSearch();
  const { isEnabled, handleOpenHotel, handleCloseHotel, toggle } =
    useHotelListDetail();

  if (!accommodationList?.length) {
    return (
      <Container
        as="section"
        className="flex flex-col h-full pt-0 pb-8 lg:pb-14"
      >
        <Content className="flex flex-col items-center justify-center gap-4 h-full text-3xl font-bold text-primary-300">
          <Icon
            icon={SearchX}
            variant="highlight"
            className="w-[60px] h-[60px]"
          />
          Hotel não encontrado!
          <br />
          Faça uma nova busca.
        </Content>
      </Container>
    );
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
