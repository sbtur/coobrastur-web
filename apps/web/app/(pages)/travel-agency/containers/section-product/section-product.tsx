'use client';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Image } from '@components/image';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@coobrastur/ui/components/data-display/caroussel';
import { OUR_SERVICE } from '../../helpers/our-product';
import { Link } from '@coobrastur/ui/components/data-entry/link';
import { Icon } from '@ui/components/data-display/icon';
import { ArrowRight, ArrowDown } from '@ui/lib/icons';

export const SectionProduct = () => {
  return (
    <Section>
      <Container>
        <Heading className="text-center items-center">
          <Badge>A melhor agência de viagens para você</Badge>
          <Title size="xl">Nossos produtos e serviços</Title>
          <Text>
            Com nossa Agência exclusiva, você garante uma viagem completa com
            toda segurança e atendimento personalizado.
          </Text>
        </Heading>

        <ResponsiveLargerThan breakpoint="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-[1024px] mx-auto">
            {OUR_SERVICE.map(item => (
              <div key={item.id} className="relative group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={323}
                  height={329}
                  className="rounded-2xl w-[323px] h-[329px] object-cover"
                />
                <Button 
                  variant="ghost"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[45px] w-[300px] h-[54px]"
                >
                  {item.title}
                </Button>
              </div>
            ))}
          </div>
        </ResponsiveLargerThan>
        <ResponsiveSmallerThan breakpoint="lg">
          <div className="mt-6">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {OUR_SERVICE.map(item => (
                  <CarouselItem
                    key={item.id}
                    className="flex-[0_0_87%] sm:flex-[0_0_50%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
                  >
                    <div className="relative group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={355}
                        height={329}
                        className="w-full h-[329px] object-cover rounded-2xl"
                      />
                      <div className="absolute bg-background rounded-xl bottom-5 left-3 w-80">
                        <div className="flex flex-col px-4">
                          <Title size="xs" className="mt-7">
                            {item.title}
                          </Title>
                          <Link
                            href="#"
                            className="text-highlight-200 flex gap-2 mt-2 mb-5"
                          >
                            Ver mais detalhes
                            <Icon icon={ArrowRight} variant="primary" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </ResponsiveSmallerThan>
        <div className='lg:hidden text-center mt-6'>
          <Link className="gap-2">
            Quero falar com um consultor
            <Icon icon={ArrowDown} variant="primary" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
