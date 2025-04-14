'use server';

import { api_service } from '@/core/infrastructure/api/api';
import { formatTextToCapitalizeCase } from '@/shared/helpers/format-text-to-capitalize-case';

type SearchAutoCompleteResponse = {
  Codigo: string;
  Texto: string;
  Tipo: string;
  Cidade: string;
  Estado: string;
};

export type AutoCompleteSearchResponse = {
  id: string;
  name: string;
  state: string;
  city: string;
  type: string;
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
  city: string;
  state: string;
  image: string;
};

type HotelFeatures = {
  Code: string;
  Description: string;
};

export type AccommodationFeatures = {
  id: string;
  name: string;
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
  id: number;
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
  const response = await api_service
    .get<
      SearchAutoCompleteResponse[]
    >(`Hotel/SearchAutoComplete?Texto=${query}`)
    .json();

  const accommodations = response.map(item => ({
    id: item.Codigo,
    name: item.Texto,
    state: item.Estado,
    city: item.Cidade,
    type: item.Tipo,
  }));

  return accommodations;
}

export async function getAccommodationsList({
  cityId,
}: {
  cityId: string;
}): Promise<AccommodationListItem[]> {
  const response = await api_service
    .get<ListHotelsResponse[]>(`Hotel/ListHotels?CityID=${cityId}`)
    .json();

  const accommodations = response.map(item => ({
    id: item.HotCode,
    name: item.CommercialName,
    address: item.Address,
    city: item.City,
    state: item.State,
    image: item.Photo,
  }));

  return accommodations;
}

export async function getAccommodationFeatures({
  hotelId,
}: {
  hotelId: string;
}): Promise<AccommodationFeatures[]> {
  const response = await api_service
    .get<HotelFeatures[]>(`Hotel/HotelFeatures?HotCode=${hotelId}`)
    .json();

  const features = response.map(item => ({
    id: item.Code,
    name: formatTextToCapitalizeCase(item.Description),
  }));

  return features;
}

export async function getAccommodationDetail({
  hotelId,
}: {
  hotelId: string;
}): Promise<AccommodationDetail> {
  const response = await api_service
    .get<InfoHotelResponse>(`Hotel/InfoHotel?HotelID=${hotelId}`)
    .json();

  const features = await getAccommodationFeatures({ hotelId });

  const accommodation = {
    id: response.Id,
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
    features,
  };

  return accommodation;
}
