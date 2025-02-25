import { HotelButton } from './Hotel.Button';
import { HotelCard as Root } from './Hotel.Card';
import { HotelDescription } from './Hotel.Description';
import { HotelImage } from './Hotel.Image';

export type { HotelCardProps } from './Hotel.Card';
export type { HotelDescriptionProps } from './Hotel.Description';
export type { HotelImageProps } from './Hotel.Image';

export const HotelCard = {
  Root,
  Image: HotelImage,
  Description: HotelDescription,
  Button: HotelButton,
} as const;
