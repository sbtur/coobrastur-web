import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import Fade, { FadeOptionsType } from 'embla-carousel-fade';
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react';

import { usePrevNextButtons } from './useButtonControl';
import { useDotButton } from './useButtonDot';

interface AutoplayConfig {
  active: boolean;
  options?: AutoplayOptionsType;
}

export interface UseCarousselProps {
  options?: EmblaOptionsType;
  autoplay?: AutoplayConfig;
  fade?: FadeOptionsType;
}

interface UseCarousselReturn {
  emblaRef: EmblaViewportRefType | undefined;
  emblaApi: EmblaCarouselType | undefined;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

const defaultOptions: EmblaOptionsType = {
  loop: true,
  align: 'start',
  slidesToScroll: 'auto',
};

const defaultAutoplayOptions: AutoplayOptionsType = {
  playOnInit: true,
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export const useCaroussel = (props: UseCarousselProps): UseCarousselReturn => {
  const { options, autoplay, fade } = props;

  const autoplayOptions = autoplay?.active
    ? [Autoplay({ ...defaultAutoplayOptions, ...autoplay.options })]
    : [];

  const fadeOptions = fade?.active ? [Fade()] : [];

  const carousselPlugins = [...autoplayOptions, ...fadeOptions];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...defaultOptions, ...options },
    carousselPlugins,
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return {
    emblaRef,
    emblaApi,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
