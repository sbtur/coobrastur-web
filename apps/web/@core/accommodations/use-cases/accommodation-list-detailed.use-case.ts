import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';
import { FeatureKey, FEATURES_DATA } from '@/shared/utils/data/features';

import { AccommodationError } from '../accommodation.errors';
import { IAccommodationService } from '../accommodation.interface';
import { AccommodationFeatures } from './accommodation-features.use-case';

export type AccommodationListDetailedUseCaseResponse = {
  id: number;
  name: string;
  neighborhood: string;
  street: string;
  phone: string;
  email: string;
  website: string;
  features: AccommodationFeatures[];
  roomFeatures: string[];
  byRequest: boolean;
  availability: boolean;
  availabilityDates: boolean;
  newSearchLink: boolean;
  network: number;
  promotion: number;
  order: number;
  totalPages: number;
  totalHotels: number;
  gallery: string[];
  category: string;
  extra: number;
  totalDays: number;
};

export function accommodationListDetailedUseCase(
  service: IAccommodationService
) {
  return {
    async exec(): Promise<AccommodationListDetailedUseCaseResponse[]> {
      try {
        const response = await service.postAccommodationListDetailed();

        const accommodationList = response.hotelsInfo.map(accommodation => {
          const features = accommodation.features?.map(feature => {
            const featureData = FEATURES_DATA[feature as FeatureKey];

            return {
              id: feature,
              name: formatTextToCapitalizeCase(featureData.name),
              icon: featureData.icon,
            };
          });

          return {
            id: accommodation.hotelCode,
            name: accommodation.hotelTradeName,
            neighborhood: accommodation.hotelNeighborhood,
            street: accommodation.address,
            phone: accommodation.homePhone,
            email: accommodation.homeEmail,
            website: accommodation.hotelHomePage,
            roomFeatures: accommodation.roomFeatures || [],
            byRequest: accommodation.byRequest,
            availability: accommodation.availabilityLink,
            availabilityDates: accommodation.datesLink,
            newSearchLink: accommodation.newSearchLink,
            network: accommodation.network,
            promotion: accommodation.promotion,
            order: accommodation.order,
            totalPages: accommodation.totalPages,
            totalHotels: accommodation.totalHotels,
            gallery: accommodation.gallery || [],
            features: features || [],
            category: accommodation.category,
            extra: accommodation.extra,
            totalDays: accommodation.totalDays,
          };
        });

        return accommodationList;
      } catch (error) {
        console.error(error);
        throw new AccommodationError('Error fetching accommodation list');
      }
    },
  };
}
