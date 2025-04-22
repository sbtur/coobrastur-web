import { httpClient } from '@/infra/http-client/http-client';
import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';
import { FeatureKey, FEATURES_DATA } from '@/shared/utils/data/features';

import {
  AccommodationDetailSummary,
  AccommodationFeatures,
  AccommodationSearchAutoComplete,
  AccommodationSearchByCity,
  IAccommodationService,
} from './accommodation.interface';

type AccommodationItemResponse = {
  HotCode: string;
  CommercialName: string;
  Address: string;
  City: string;
  State: string;
  Photo: string;
};

type AccommodationSearchAutoCompleteResponse = {
  Codigo: string;
  Texto: string;
  Tipo: 'Cidade' | 'Hotel';
  Cidade: string;
  Estado: string;
};

type AccommodationFeaturesResponse = {
  Code: string;
  Description: string;
};

type AccommodationDetailSummaryResponse = {
  Id: number;
  Name: string;
  Address: string;
  Phone: string;
  Email: string;
  Site: string;
  Free: string;
  Coordinates: {
    Latitude: number;
    Longitude: number;
  };
  Images: string[];
  AdditionalInfo: {
    InfoA: string;
    InfoB: string;
  };
};

export function accommodationService(): IAccommodationService {
  return {
    async getAccommodationsByCityId({
      cityId,
    }: {
      cityId: string;
    }): Promise<AccommodationSearchByCity[]> {
      const response = await httpClient
        .get<AccommodationItemResponse[]>(`Hotel/ListHotels?CityID=${cityId}`)
        .json();

      return response.map(accommodation => ({
        id: accommodation.HotCode,
        name: accommodation.CommercialName,
        address: accommodation.Address,
        city: accommodation.City,
        state: accommodation.State,
        image: accommodation.Photo,
      }));
    },

    async getAccommodationsAutoCompleteByQuery({
      query,
    }: {
      query: string;
    }): Promise<AccommodationSearchAutoComplete[]> {
      const response = await httpClient
        .get<
          AccommodationSearchAutoCompleteResponse[]
        >(`Hotel/SearchAutoComplete?Texto=${query}`)
        .json();

      return response.map(accommodation => ({
        id: accommodation.Codigo,
        name: accommodation.Texto,
        state: accommodation.Estado,
        city: accommodation.Cidade,
        type: accommodation.Tipo === 'Cidade' ? 'city' : 'hotel',
      }));
    },

    async getAccommodationFeatures({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<AccommodationFeatures[]> {
      const response = await httpClient
        .get<
          AccommodationFeaturesResponse[]
        >(`Hotel/HotelFeatures?HotCode=${hotelId}`)
        .json();

      const features = response.map(({ Code, Description }) => {
        const feature = FEATURES_DATA[Code as FeatureKey];

        return {
          id: Code,
          name: formatTextToCapitalizeCase(Description),
          icon: feature ? feature.icon : '',
        };
      });

      return features;
    },

    async getAccommodationDetail({
      hotelId,
    }: {
      hotelId: string;
    }): Promise<AccommodationDetailSummary> {
      const response = await httpClient
        .get<AccommodationDetailSummaryResponse>(
          `Hotel/InfoHotel?HotelID=${hotelId}`,
        )
        .json();

      return {
        id: response.Id.toString(),
        name: formatTextToCapitalizeCase(response.Name),
        address: formatTextToCapitalizeCase(response.Address),
        phone: response.Phone,
        email: response.Email,
        site: response.Site,
        free: response.Free,
        coordinates: {
          latitude: response.Coordinates.Latitude,
          longitude: response.Coordinates.Longitude,
        },
        images: response.Images,
        description: response.AdditionalInfo.InfoB,
        additionalInfo: response.AdditionalInfo.InfoA,
      };
    },

    toAccommodationStaticList(
      accommodation: AccommodationDetailSummary,
    ): Omit<AccommodationSearchByCity, 'city' | 'state'> {
      return {
        id: accommodation.id,
        name: accommodation.name,
        address: accommodation.address,
        image: accommodation.images[0] || '',
      };
    },
  };
}
