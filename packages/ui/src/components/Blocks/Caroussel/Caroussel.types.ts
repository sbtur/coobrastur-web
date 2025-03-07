import { UseCarousselProps } from '@coobrastur/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';

export interface CarousselProps {
  slides: {
    name: string;
    image: string;
    description: string;
  }[];
  options: UseCarousselProps;
}
