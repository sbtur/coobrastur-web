import { useRouter } from 'next/navigation';

import { useToggle } from '@hooks/useToggle';

export const useHotelListDetail = () => {
  const { isEnabled, toggle } = useToggle();
  const { push } = useRouter();

  const handleOpenHotel = (hotelId: number) => {
    push(`?h=${hotelId}`, {
      scroll: false,
    });
    toggle();
  };

  const handleCloseHotel = () => {
    push('/', {
      scroll: false,
    });
    toggle();
  };

  return { isEnabled, handleOpenHotel, handleCloseHotel };
};
