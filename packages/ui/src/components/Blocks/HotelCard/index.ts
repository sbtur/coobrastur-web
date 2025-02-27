import { HotelButton } from './Hotel.Button';
import { HotelCard as Root } from './Hotel.Card';
import { HotelDescription } from './Hotel.Description';
import { HotelImage } from './Hotel.Image';
import { HotelImageIcon } from './Hotel.ImageIcon';
import { HotelImageWrapper } from './Hotel.ImageWrapper';

export type { HotelCardProps } from './Hotel.Card';
export type { HotelDescriptionProps } from './Hotel.Description';
export type { HotelImageProps } from './Hotel.Image';
export type { HotelImageIconProps } from './Hotel.ImageIcon';
export type { HotelImageWrapperProps } from './Hotel.ImageWrapper';

export const HotelCard = {
  Root,
  Image: HotelImage,
  ImageWrapper: HotelImageWrapper,
  ImageIcon: HotelImageIcon,
  Description: HotelDescription,
  Button: HotelButton,
} as const;
