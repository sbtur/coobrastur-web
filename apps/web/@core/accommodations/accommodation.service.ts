import { httpClient } from '@/infra/http-client/http-client';

import {
  ApiAccommodationAvailableDatesParams,
  ApiAccommodationAvailableDatesResponse,
  ApiAccommodationDetailListResponse,
  ApiAccommodationDetailSummaryResponse,
  ApiAccommodationFeaturesResponse,
  ApiAccommodationItemResponse,
  ApiAccommodationSearchAutoCompleteResponse,
  ApiAccomodationDetailListParams,
  IAccommodationService,
} from './accommodation.interface';

export function accommodationService(): IAccommodationService {
  return {
    async getAccommodationsByCityId({
      cityId,
    }: {
      cityId: string;
    }): Promise<ApiAccommodationItemResponse[]> {
      const response = await httpClient
        .get<
          ApiAccommodationItemResponse[]
        >(`Hotel/ListHotels?CityID=${cityId}`)
        .json();

      return response;
    },

    async getAccommodationsAutoCompleteByQuery({
      query,
    }: {
      query: string;
    }): Promise<ApiAccommodationSearchAutoCompleteResponse[]> {
      const response = await httpClient
        .get<
          ApiAccommodationSearchAutoCompleteResponse[]
        >(`Hotel/SearchAutoComplete?Texto=${query}`)
        .json();

      return response;
    },

    async getAccommodationFeatures({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<ApiAccommodationFeaturesResponse[]> {
      const response = await httpClient
        .get<
          ApiAccommodationFeaturesResponse[]
        >(`Hotel/HotelFeatures?HotCode=${hotelId}`)
        .json();

      return response;
    },

    async getAccommodationDetail({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<ApiAccommodationDetailSummaryResponse> {
      const response = await httpClient
        .get<ApiAccommodationDetailSummaryResponse>(
          `Hotel/InfoHotel?HotelID=${hotelId}`
        )
        .json();

      return response;
    },

    toAccommodationStaticList(accommodation: any): Omit<any, 'city' | 'state'> {
      return {
        id: accommodation.id,
        name: accommodation.name,
        address: accommodation.address,
        image: accommodation.images[0] || '',
      };
    },

    async postAccommodationListDetailed(
      params: ApiAccomodationDetailListParams
    ): Promise<ApiAccommodationDetailListResponse> {
      const response = await httpClient
        .post<ApiAccommodationDetailListResponse>(`Hotel/GetHotels`, {
          json: params,
        })
        .json();

      return response;
    },

    async getAvailableDates({
      HotCode,
      YearMonth,
    }: ApiAccommodationAvailableDatesParams): Promise<
      ApiAccommodationAvailableDatesResponse[]
    > {
      const response = await httpClient
        .get<
          ApiAccommodationAvailableDatesResponse[]
        >(`Hotel/AvailableDate?HotCode=${HotCode}&YearMonth=${YearMonth}`)
        .json();

      return response;
    },
  };
}
