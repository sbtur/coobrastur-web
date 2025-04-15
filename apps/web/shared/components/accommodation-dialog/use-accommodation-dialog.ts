import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  AccommodationDetail,
  getAccommodationDetail,
} from '@/app/(pages)/search-place/http/accommodation';

type UseAccommodationDialog = {
  accommodation: AccommodationDetail | null;
  isShowGallery: boolean;
  handleShowGallery: () => void;
};

export function useAccommodationDialog(): UseAccommodationDialog {
  const [accommodation, setAccommodation] =
    useState<AccommodationDetail | null>(null);
  const [isShowGallery, setIsShowGallery] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const hotelId = searchParams.get('h');

    const getAccommodation = async () => {
      const response = await getAccommodationDetail({
        hotelId: hotelId || '',
      });
      setAccommodation(response);
    };

    if (hotelId) {
      getAccommodation();
    }
  }, [searchParams]);

  const handleShowGallery = () => {
    setIsShowGallery(!isShowGallery);
  };

  return { accommodation, isShowGallery, handleShowGallery };
}
