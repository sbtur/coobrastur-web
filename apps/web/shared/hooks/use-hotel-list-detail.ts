import { useToggle } from '@hooks/use-toggle';

import {
  pushUrlParams,
  removeUrlParams,
} from '@/shared/helpers/manage-url-params';

export const useHotelListDetail = () => {
  const { isEnabled, toggle } = useToggle();

  const handleOpenHotel = (hotelId: string) => {
    pushUrlParams({ key: 'h', value: hotelId });
    toggle();
  };

  const handleCloseHotel = () => {
    removeUrlParams({ key: 'h' });
    toggle();
  };

  return { isEnabled, handleOpenHotel, handleCloseHotel, toggle };
};
