export interface DestinationResponse {
  id: string;
  image: string;
  city: {
    slug: string;
    name: string;
  };
  country: {
    slug: string;
    name: string;
  };
  state: {
    slug: string;
    name: string;
  };
  absolute_url: string;
}
