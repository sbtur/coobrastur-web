import { AccommodationDetail } from '@coobrastur/types-shared';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { ArrowRight, CreditCard, Users } from '@coobrastur/ui/lib/icons';

import { HeaderPublic } from '@/shared/components/header';
import { ResponsiveLargerThan } from '@/shared/components/responsive';

import { AccommodationMainInfoContainer } from '../components/accommodation-main-info-container';
import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';

import { Text } from '@ui/components/data-display/text';

type AccommodationPublicProps = {
  accommodation: AccommodationDetail;
};

export default function AccommodationPublic({
  accommodation,
}: AccommodationPublicProps) {
  return (
    <>
      <ResponsiveLargerThan breakpoint="lg">
        <HeaderPublic />
      </ResponsiveLargerThan>
      <div className="bg-white">
        <Container className="bg-white grid gap-6 p-0 lg:py-12 lg:px-3 relative">
          <div className="lg:flex gap-4 justify-between relative">
            <ImageGallery images={accommodation.gallery} />
            <AccommodationMainInfoContainer>
              <div className="space-y-1 text-left">
                <Title>{accommodation.name}</Title>
                <Text>{accommodation.street}</Text>
              </div>
              <Separator />
              <Button size="lg" className="w-full rounded-[10px]">
                Quero me hospedar aqui{' '}
                <Icon icon={ArrowRight} variant="white" />
              </Button>
              <div className="hidden lg:flex flex-col gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-neutral-400 underline text-center"
                >
                  Fale com um consultor no WhatsApp
                </a>
                <Separator />
                <div className="space-y-1">
                  <Text className="font-bold text-base text-highlight-100 text-center">
                    Garanta sua diária com até 60% de desconto!
                  </Text>
                  <Text>
                    <Icon
                      icon={CreditCard}
                      variant="highlight"
                      className="mr-2"
                    />
                    Não ocupa o <span className="font-bold">limite</span> do seu
                    cartão de crédito
                  </Text>
                  <Text>
                    <Icon icon={Users} variant="highlight" className="mr-2" />
                    Café da manhã para 2 pessoas
                  </Text>
                </div>
              </div>
            </AccommodationMainInfoContainer>
          </div>

          <main className="grid gap-8 max-full lg:max-w-[530px] xl:max-w-[790px] px-6 lg:p-0">
            <section>
              <Title as="h3" size="sm" className="mb-3">
                Informações
              </Title>
              <Text>{accommodation.description}</Text>
              <CollapsibleDescription>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  velit metus, ullamcorper vitae ullamcorper quis, mollis at
                  risus. Fusce nulla turpis, lobortis eu sollicitudin nec,
                  posuere in arcu. Donec facilisis scelerisque lacus. Maecenas a
                  urna nisl. Fusce nulla turpis, lobortis eu sollicitudin nec,
                  posuere in arcu.
                </Text>
              </CollapsibleDescription>
            </section>
            <section>
              <Title as="h3" size="sm" className="mb-3">
                Comodidades
              </Title>
              <Amenities amenities={[1, 10, 6, 7, 2, 5]} />
            </section>
            <section>
              <Title as="h3" size="sm" className="mb-3">
                Localização
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}
