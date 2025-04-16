import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  AccommodationDetail,
  getAccommodationDetail,
} from '@/app/search-place/http/accommodation';

type UseAccommodationDialog = {
  accommodation: AccommodationDetail;
  isShowGallery: boolean;
  handleShowGallery: () => void;
  isLoading: boolean;
};

export function useAccommodationDialog(): UseAccommodationDialog {
  const [accommodation, setAccommodation] = useState<AccommodationDetail>(
    {} as AccommodationDetail,
  );
  const [isShowGallery, setIsShowGallery] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    const hotelId = searchParams.get('h');

    const getAccommodation = async () => {
      const response = await getAccommodationDetail({
        hotelId: hotelId || '',
      });
      setAccommodation(response);
      setIsLoading(false);
    };

    if (hotelId) {
      getAccommodation();
    }
  }, [searchParams]);

  const handleShowGallery = () => {
    setIsShowGallery(!isShowGallery);
  };

  return { accommodation, isShowGallery, handleShowGallery, isLoading };
}
