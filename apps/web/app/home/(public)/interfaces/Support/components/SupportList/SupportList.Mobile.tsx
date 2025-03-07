'use client';

import { Caroussel } from '@coobrastur/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@coobrastur/ui/components/DataDisplay/Caroussel/hooks/useCaroussel';

import { SUPPORT } from '../../helpers/support';
import { Card } from '../Card';

export const SupportListMobile = () => {
  const { emblaRef, selectedIndex, scrollSnaps, onDotButtonClick } =
    useCaroussel({
      options: {
        loop: false,
      },
    });

  return (
    <div>
      <Caroussel.Root>
        <Caroussel.Container ref={emblaRef}>
          {SUPPORT.map(item => (
            <Caroussel.Item key={item.title} className="flex-[0_0_75%]">
              <Card key={item.title} content={item} />
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
    </div>
  );
};
