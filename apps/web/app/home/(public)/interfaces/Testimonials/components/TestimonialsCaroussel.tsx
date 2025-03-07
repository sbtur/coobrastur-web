'use client';
import { TESTIMONIALS } from '../helpers/testimonials';

import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';

export const TestimonialsCaroussel = () => {
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useCaroussel({});
  return (
    <Caroussel.Root className="mt-8 md:mt-0 lg:w-[300px] xl:w-full">
      <Caroussel.Container ref={emblaRef}>
        {TESTIMONIALS.map(item => (
          <Caroussel.Item key={item.id} className="flex-[0_0_100%]">
            <div className="w-full h-[245px] border-2 border-secondary-200 rounded-[20px] p-10 bg-secondary-100">
              <Title as="h3" size="sm">
                {item.name}
              </Title>
              <Text as="span" size="sm" className="italic">
                {item.date}
              </Text>
              <Text className="mt-2">{item.description}</Text>
            </div>
          </Caroussel.Item>
        ))}
      </Caroussel.Container>
      <Caroussel.ButtonWrapper>
        <Caroussel.ButtonPrevious
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="-ml-4"
        />
        <Caroussel.ButtonNext
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="-mr-4"
        />
      </Caroussel.ButtonWrapper>
      <Caroussel.ButtonDotWrapper className="absolute bottom-[30px]">
        {scrollSnaps.map((_, index) => (
          <Caroussel.ButtonDot
            key={index}
            onClick={() => onDotButtonClick(index)}
            index={index}
            selectedIndex={selectedIndex}
          />
        ))}
      </Caroussel.ButtonDotWrapper>
    </Caroussel.Root>
  );
};
