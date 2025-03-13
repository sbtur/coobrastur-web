import { CATEGORY_LABELS } from './accommodation-category.types';

export type AccommodationDetail = {
  id: number;
  broker: string;
  name: string;
  unique_id: string;
  image: string;
  city: {
    slug: string;
    name: string;
  };
  country: {
    slug: string;
    name: string;
  };
  state: string;
  coordinates: {
    longitude: string;
    latitude: string;
  };
  street: string;
  complement: string;
  points: number;
  total_days: number;
  extra: number;
  is_preferential: boolean;
  category: (typeof CATEGORY_LABELS)[keyof typeof CATEGORY_LABELS];
  available_to_book: boolean;
  absolute_url: string;
  by_request: boolean;
  position: {
    lng: number;
    lat: number;
  };
  description: string;
  amenities: string[];
  gallery: string[];
};
