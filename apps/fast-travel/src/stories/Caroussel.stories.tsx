import Image from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps,
} from '@ui/components/data-display/caroussel';
import {
  HotelButton,
  HotelCard,
  HotelDescription,
  HotelImage,
  HotelImageWrapper,
} from '@ui/components/data-display/hotel-card';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { ArrowRight } from '@ui/lib/icons';

const PLACES = Array.from(Array(10).keys()).map(index => ({
  name: `Place ${index + 1}`,
  description: `Description ${index + 1}`,
  image: `/images/places/place-${index + 1}.jpg`,
}));

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Caroussel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const CarouselComponent = (args?: CarouselProps) => (
  <Carousel
    {...args}
    className="w-[340px] sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[1200px] 2xl:w-[1500px]"
  >
    <CarouselContent>
      {PLACES.map(slide => (
        <CarouselItem
          key={slide.name}
          className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
        >
          <HotelCard>
            <HotelImageWrapper>
              <HotelImage>
                <Image
                  src={slide.image}
                  alt={slide.name}
                  width={300}
                  height={300}
                />
              </HotelImage>
            </HotelImageWrapper>
            <HotelDescription>
              <Title as="h3" size="xs" align="center">
                {slide.name}
              </Title>
              <Text size="sm" align="center">
                {slide.description}
              </Text>
              <HotelButton type="link" href="#" className="justify-center">
                Ver mais detalhes <Icon icon={ArrowRight} variant="primary" />
              </HotelButton>
            </HotelDescription>
          </HotelCard>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    <CarouselDot />
  </Carousel>
);

export const Default: Story = {
  render: () => <CarouselComponent />,
};

export const AutoPlay: Story = {
  args: {
    autoplay: {
      playOnInit: true,
    },
  },
  render: args => <CarouselComponent {...args} />,
};
