export type ApiAccommodationItemResponse = {
  hotCode: string;
  commercialName: string;
  address: string;
  city: string;
  state: string;
  photo: string;
};

export type ApiAccommodationSearchAutoCompleteResponse = {
  codigo: string;
  texto: string;
  tipo: 'Cidade' | 'Hotel';
  cidade: string;
  estado: string;
};

export type ApiAccommodationFeaturesResponse = {
  code: string;
  description: string;
};

export type ApiAccommodationDetailSummaryResponse = {
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
  additionalInfo: {
    infoA: string;
    infoB: string;
  };
};

export enum ReservationType {
  ALL = 0,
  IMMEDIATE = 1,
  ON_REQUEST = 2,
}

export enum ExtraType {
  ALL = 0,
  WITH_EXTRA = 1,
  WITHOUT_EXTRA = 2,
}

export enum NetworkTypeCode {
  Silver,
  Gold,
  Diamond,
}

export type ApiAccomodationDetailListParams = {
  code: number;
  startDate: string | null;
  endDate: string | null;
  roomQuantity: number;
  characteristicCodes?: string;
  networkTypeCode?: NetworkTypeCode;
  divCode?: string;
  planType?: string;
  immediate?: ReservationType;
  extras?: ExtraType;
  neighborhood?: string;
  adultsRoom1: number;
  adultsRoom2: number;
  adultsRoom3: number;
  adultsRoom4: number;
  childrenRoom1: number;
  childrenRoom2: number;
  childrenRoom3: number;
  childrenRoom4: number;
  childrenAges: string;
  page?: number;
  recordsPerPage?: number;
};

export type ApiAccommodationDetailListResponse = {
  neighborhood: {
    description: string;
  };
  hotelsInfo: {
    id: number;
    hotelCode: number;
    hotelTradeName: string;
    hotelNeighborhood: string;
    address: string;
    homePhone: string;
    homeEmail: string;
    hotelHomePage: string;
    features: string[] | null;
    roomFeatures: string[] | null;
    byRequest: boolean;
    availabilityLink: boolean;
    datesLink: boolean;
    newSearchLink: boolean;
    network: number;
    additionalHomePageNote: string;
    additionalDescriptionForHomePage: string;
    text: string | null;
    additionalText: string;
    promotion: number;
    order: number;
    errors: number;
    totalPages: number;
    totalHotels: number;
    gallery: string[] | null;
    category: string;
    extra: number;
    totalDays: number;
    hotelValues: {
      typeCode: number;
      description: string;
      value: number;
    }[];
  }[];
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
  postAccommodationListDetailed(
    params: ApiAccomodationDetailListParams
  ): Promise<ApiAccommodationDetailListResponse>;
}
