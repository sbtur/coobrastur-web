import { Card } from '../card/card';
import { TRAVEL_AGENCY } from '../../helpers/travel-agency';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from '@ui/components/data-display/caroussel';

export const SectionAgencyMobile = () => {
    return (
      <div className="lg:hidden mt-3">
       <Carousel>
        <CarouselContent>
            {TRAVEL_AGENCY.map(item => (
                <CarouselItem
                key={item.title}
                className='flex-[0_0_87%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]'>
                    <Card travelAgency={item} />
                </CarouselItem>
            ))}
        </CarouselContent>
       </Carousel>
      </div>
    );
  };