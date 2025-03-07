import { CarousselProps } from './Caroussel.types';

import { HotelCard } from '@ui/components/Blocks/HotelCard';
import { Caroussel } from '@ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Icon } from '@ui/components/DataDisplay/Icon';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { ArrowRight } from '@ui/lib/icons';

export const CarousselUI = (props: CarousselProps) => {
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
      <Caroussel.Container
        ref={emblaRef}
        className="w-[340px] sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[1200px] 2xl:w-[1500px]"
      >
        {slides.map(slide => (
          <Caroussel.Item
            key={slide.name}
            className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
          >
            <HotelCard.Root>
              <HotelCard.Image>
                <img src={slide.image} alt={slide.name} />
              </HotelCard.Image>
              <HotelCard.Description>
                <Title as="h3" size="xs" align="center">
                  {slide.name}
                </Title>
                <Text size="sm" align="center">
                  {slide.description}
                </Text>
                <HotelCard.Button
                  type="link"
                  href="#"
                  className="justify-center"
                >
                  Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
                </HotelCard.Button>
              </HotelCard.Description>
            </HotelCard.Root>
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
          className="-mr-5"
        />
      </Caroussel.ButtonWrapper>
      <Caroussel.ButtonDotWrapper>
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
