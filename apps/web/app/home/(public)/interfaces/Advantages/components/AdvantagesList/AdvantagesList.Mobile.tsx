'use client';
import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';

import { Image } from '@components/Image';

import { Card } from '../../components/Card';
import { ADVANTAGES } from '../../helpers';

export const AdvantagesListMobile = () => {
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useCaroussel({
    options: {
      loop: false,
    },
  });

  return (
    <div>
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {ADVANTAGES.map(item => (
            <Caroussel.Item key={item.title} className="flex-[0_0_75%]">
              <Card advantage={item} />
            </Caroussel.Item>
          ))}
        </Caroussel.Container>
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
      <div className="mt-4 rounded-2xl overflow-hidden">
        <Image
          src="/images/pages/home/advantages-featured.png"
          alt="Hotel"
          width={610}
          height={408}
          className="w-full"
        />
      </div>
    </div>
  );
};
