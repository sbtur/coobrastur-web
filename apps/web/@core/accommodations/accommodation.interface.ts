export type ApiAccommodationItemResponse = {
  HotCode: string;
  CommercialName: string;
  Address: string;
  City: string;
  State: string;
  Photo: string;
};

export type ApiAccommodationSearchAutoCompleteResponse = {
  Codigo: string;
  Texto: string;
  Tipo: 'Cidade' | 'Hotel';
  Cidade: string;
  Estado: string;
};

export type ApiAccommodationFeaturesResponse = {
  Code: string;
  Description: string;
};

export type ApiAccommodationDetailSummaryResponse = {
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

export interface IAccommodationService {
  getAccommodationsByCityId({
    cityId,
  }: {
    cityId: string;
  }): Promise<ApiAccommodationItemResponse[]>;
  getAccommodationsAutoCompleteByQuery({
    query,
  }: {
    query: string;
  }): Promise<ApiAccommodationSearchAutoCompleteResponse[]>;
  getAccommodationFeatures({
    hotelId,
  }: {
    hotelId: string;
  }): Promise<ApiAccommodationFeaturesResponse[]>;
  getAccommodationDetail({
    hotelId,
  }: {
    hotelId: string;
  }): Promise<ApiAccommodationDetailSummaryResponse>;
  toAccommodationStaticList(accommodation: any): Omit<any, 'city' | 'state'>;
}
