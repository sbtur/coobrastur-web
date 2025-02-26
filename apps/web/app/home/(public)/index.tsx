'use client';
import { Caroussel } from '@workspace/ui/components/DataDisplay/Caroussel';
import { useCaroussel } from '@workspace/ui/components/DataDisplay/Caroussel/useCaroussel';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { Advantages } from './interfaces/Advantages';
import { Destinations } from './interfaces/Destinations';
import { Display } from './interfaces/Display';
import { Hotels } from './interfaces/Hotels';
import { Partners } from './interfaces/Partners';
import { Support } from './interfaces/Support';
import { Testimonials } from './interfaces/Testimonials';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 15;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface CarousselStoryProps {
  slides: number[];
  options: any;
}

const CarousselStory = (props: CarousselStoryProps) => {
  const { slides, options } = props;

  const { emblaRef } = useCaroussel({
    options,
  });

  return (
    <div className="w-[1000px] bg-yellow-500 mx-auto">
      <Caroussel.Root ref={emblaRef} className="bg-black">
        <Caroussel.Container>
          {slides.map(slide => (
            <Caroussel.Item
              key={slide}
              className="flex-[0_0_33%] h-[300px] bg-highlight flex items-center justify-center"
            >
              <div className="p-10 text-white">{slide + 1}</div>
            </Caroussel.Item>
          ))}
        </Caroussel.Container>
      </Caroussel.Root>
    </div>
  );
};

export function HomePublic() {
  return (
    <>
      <Container as="section" className="relative h-screen">
        <Header />
        <Display />
      </Container>

      <Container size="full" className="relative z-10">
        <Container
          size="full"
          as="section"
          padding="lg"
          className="bg-background"
        >
          <Container>
            <CarousselStory slides={SLIDES} options={OPTIONS} />
          </Container>
        </Container>
        <Hotels />

        <Partners />

        <Advantages />

        <Destinations />

        <Support />

        <Testimonials />

        <Footer />
      </Container>
    </>
  );
}
