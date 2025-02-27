'use client';

import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';
import { Section } from '@workspace/ui/components/Layouts/Section';

import { Image } from '@components/Image';

import { PARTNERS } from '../../helpers';

export const PartnersList = () => {
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    isHidden,
  } = useCaroussel({
    options: {
      loop: false,
    },
  });

  return (
    <Section spacing="none" className="mt-6 md:mt-0 md:w-10/12">
      <Caroussel.Root className="lg:pr-[50px]">
        <Caroussel.Container ref={emblaRef} className="">
          {PARTNERS.map(item => (
            <Caroussel.Item
              key={item.name}
              className="flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.6%] group"
            >
              <picture className="bg-background border rounded-2xl flex items-center justify-center shadow-md shadow-black/5 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={115}
                  height={115}
                  className="object-contain rounded-2xl pointer-events-none"
                />
              </picture>
            </Caroussel.Item>
          ))}
        </Caroussel.Container>
        <Caroussel.ButtonWrapper
          className={`hidden ${isHidden ? 'hidden' : 'lg:flex '}`}
        >
          <Caroussel.ButtonPrevious
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="transition-colors shadow-xl -ml-[50px]"
          />
          <Caroussel.ButtonNext
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="transition-colors shadow-xl"
          />
        </Caroussel.ButtonWrapper>
        <Caroussel.ButtonDotWrapper className="lg:hidden">
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
    </Section>
  );
};
