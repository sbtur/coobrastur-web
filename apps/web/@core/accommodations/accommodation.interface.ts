export type AccommodationSearchByCity = {
  id: string;
  name: string;
  address: string;
  city?: string;
  state?: string;
  image: string;
};

export type AccommodationSearchAutoComplete = {
  id: string;
  name: string;
  state: string;
  city: string;
  type: 'city' | 'hotel';
};

export type AccommodationFeatures = {
  id: string;
  name: string;
  icon: string;
};

export type AccommodationDetailSummary = {
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
};

export interface IAccommodationService {
  getAccommodationsByCityId({
    cityId,
  }: {
    cityId: string;
  }): Promise<AccommodationSearchByCity[]>;
  getAccommodationsAutoCompleteByQuery({
    query,
  }: {
    query: string;
  }): Promise<AccommodationSearchAutoComplete[]>;
  getAccommodationFeatures({
    hotelId,
  }: {
    hotelId: string;
  }): Promise<AccommodationFeatures[]>;
  getAccommodationDetail({
    hotelId,
  }: {
    hotelId: string;
  }): Promise<AccommodationDetailSummary>;
  toAccommodationStaticList(
    accommodation: AccommodationDetailSummary,
  ): Omit<AccommodationSearchByCity, 'city' | 'state'>;
}
