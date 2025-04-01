import { usePathname, useRouter } from 'next/navigation';

import { useToggle } from '@hooks/use-toggle';

export const useHotelListDetail = () => {
  const { isEnabled, toggle } = useToggle();
  const { push } = useRouter();
  const pathname = usePathname();

  const handleOpenHotel = (hotelId: number) => {
    push(`?h=${hotelId}`, {
      scroll: false,
    });
    toggle();
  };

  const handleCloseHotel = () => {
    push(pathname, {
      scroll: false,
    });
    toggle();
  };

  return { isEnabled, handleOpenHotel, handleCloseHotel };
};
