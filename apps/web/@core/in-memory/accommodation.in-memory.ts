import { accommodationsListDetailsMock } from '@/shared/mocks/accommodations-list-details';

import {
  ApiAccommodationDetailListResponse,
  ApiAccommodationDetailSummaryResponse,
  ApiAccommodationFeaturesResponse,
  ApiAccommodationItemResponse,
  ApiAccommodationSearchAutoCompleteResponse,
  IAccommodationService,
} from '../accommodations/accommodation.interface';

export function accommodationInMemory(): IAccommodationService {
  return {
    async getAccommodationsByCityId({
      cityId,
    }: {
      cityId: string;
    }): Promise<ApiAccommodationItemResponse[]> {
      return [];
    },

    async getAccommodationsAutoCompleteByQuery({
      query,
    }: {
      query: string;
    }): Promise<ApiAccommodationSearchAutoCompleteResponse[]> {
      return [];
    },

    async getAccommodationFeatures({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<ApiAccommodationFeaturesResponse[]> {
      return [];
    },

    async getAccommodationDetail({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<ApiAccommodationDetailSummaryResponse> {
      return {};
    },

    toAccommodationStaticList(accommodation: any): Omit<any, 'city' | 'state'> {
      return {
        id: accommodation.id,
        name: accommodation.name,
        address: accommodation.address,
        image: accommodation.images[0] || '',
      };
    },

    async postAccommodationListDetailed(): Promise<ApiAccommodationDetailListResponse> {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(accommodationsListDetailsMock);
        }, 1000);
      });
    },
  };
}
