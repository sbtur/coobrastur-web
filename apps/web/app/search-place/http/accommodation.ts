'use server';

import { apiClient } from '@/core/infrastructure/api/api-client';
import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';
import { FeatureKey, FEATURES_DATA } from '@/shared/utils/data/features';

import { ACCOMMODATIONS_LIST_ID } from '../helpers/accommodations-list-id';

type SearchAutoCompleteResponse = {
  Codigo: string;
  Texto: string;
  Tipo: 'Cidade' | 'Hotel';
  Cidade: string;
  Estado: string;
};

export type AutoCompleteSearchResponse = {
  id: string;
  name: string;
  state: string;
  city: string;
  type: 'city' | 'hotel';
};

type ListHotelsResponse = {
  HotCode: string;
  CommercialName: string;
  Address: string;
  City: string;
  State: string;
  Photo: string;
};

export type AccommodationListItem = {
  id: string;
  name: string;
  address: string;
  city?: string;
  state?: string;
  image: string;
};

type HotelFeatures = {
  Code: string;
  Description: string;
};

export type AccommodationFeatures = {
  id: string;
  name: string;
  icon: string;
};

export type InfoHotelResponse = {
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

export type AccommodationDetail = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  site: string;
  free: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  description: string;
  additionalInfo: string;
  features: AccommodationFeatures[];
};

export async function getAccommodationAutoCompleteSearch(
  query: string,
): Promise<AutoCompleteSearchResponse[]> {
  const response = await apiClient
    .get<
      SearchAutoCompleteResponse[]
    >(`Hotel/SearchAutoComplete?Texto=${query}`)
    .json();

  return response.map(({ Codigo, Texto, Tipo, Estado, Cidade }) => ({
    id: Codigo,
    name: Texto,
    state: Estado,
    city: Cidade,
    type: Tipo === 'Cidade' ? 'city' : 'hotel',
  }));
}

export async function getAccommodationsList({
  cityId,
}: {
  cityId: string;
}): Promise<AccommodationListItem[]> {
  const response = await apiClient
    .get<ListHotelsResponse[]>(`Hotel/ListHotels?CityID=${cityId}`)
    .json();

  const accommodations = response.map(
    ({ HotCode, CommercialName, Address, City, State, Photo }) => ({
      id: HotCode,
      name: CommercialName,
      address: Address,
      city: City,
      state: State,
      image: Photo,
    }),
  );

  return accommodations;
}

export async function getAccommodationFeatures({
  hotelId,
}: {
  hotelId: string;
}): Promise<AccommodationFeatures[]> {
  const response = await apiClient
    .get<HotelFeatures[]>(`Hotel/HotelFeatures?HotCode=${hotelId}`)
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
}

export async function getAccommodationDetail({
  hotelId,
}: {
  hotelId: string;
}): Promise<AccommodationDetail> {
  const {
    Id,
    Name,
    Address,
    Phone,
    Email,
    Site,
    Free,
    Coordinates,
    Images,
    AdditionalInfo,
  } = await apiClient
    .get<InfoHotelResponse>(`Hotel/InfoHotel?HotelID=${hotelId}`)
    .json();

  const features = await getAccommodationFeatures({ hotelId });

  const accommodation = {
    id: Id.toString(),
    name: formatTextToCapitalizeCase(Name),
    address: formatTextToCapitalizeCase(Address),
    phone: Phone,
    email: Email,
    site: Site,
    free: Free,
    coordinates: {
      latitude: Coordinates.Latitude,
      longitude: Coordinates.Longitude,
    },
    images: Images,
    description: AdditionalInfo.InfoB,
    additionalInfo: AdditionalInfo.InfoA,
    features,
  };

  return accommodation;
}

export async function getAccommodationsStaticList(): Promise<
  AccommodationListItem[]
> {
  const accommodationsList = [];

  for await (const hotelId of ACCOMMODATIONS_LIST_ID) {
    const accommodation = await getAccommodationDetail({ hotelId });

    accommodationsList.push({
      id: accommodation.id,
      name: accommodation.name,
      address: accommodation.address,
      image: accommodation.images[0] || '',
    });
  }

  return accommodationsList;
}
