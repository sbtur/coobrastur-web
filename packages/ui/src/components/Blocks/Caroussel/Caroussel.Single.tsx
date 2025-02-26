import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';

import { CarousselProps } from './Caroussel.types';

export const CarousselSingle = (props: CarousselProps) => {
  const { slides, options } = props;

  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useCaroussel(options);

  return (
    <Caroussel.Root>
      <Caroussel.Container ref={emblaRef} className="w-[1024px]">
        {slides.map(slide => (
          <Caroussel.Item
            key={slide.name}
            className="flex-[0_0_100%] h-[350px] p-0 items-center justify-center bg-highlight rounded-2xl"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </Caroussel.Item>
        ))}
      </Caroussel.Container>
      <Caroussel.ButtonWrapper>
        <Caroussel.ButtonPrevious
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="ml-4"
        />
        <Caroussel.ButtonNext
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="mr-4"
        />
      </Caroussel.ButtonWrapper>
      <Caroussel.ButtonDotWrapper className="relative z-10 -mt-6">
        {scrollSnaps.map((_, index) => (
          <Caroussel.ButtonDot
            key={index}
            onClick={() => onDotButtonClick(index)}
            index={index}
            selectedIndex={selectedIndex}
            variant="white"
          />
        ))}
      </Caroussel.ButtonDotWrapper>
    </Caroussel.Root>
  );
};
