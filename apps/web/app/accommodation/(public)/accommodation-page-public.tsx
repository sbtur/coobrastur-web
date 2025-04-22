import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { ArrowRight, CreditCard, Users } from '@coobrastur/ui/lib/icons';

import { AccommodationDetail } from '@/@core/accommodations/use-cases/accommodation-details.use-case';
import { Link } from '@/shared/components/link';

import { AccommodationMainInfoContainer } from '../components/accommodation-main-info-container';
import { Features } from '../components/features';
import { ImageGallery } from '../components/image-gallery';

import { Text } from '@ui/components/data-display/text';

type AccommodationPublicProps = {
  accommodation: AccommodationDetail;
};

export default function AccommodationPublic({
  accommodation,
}: AccommodationPublicProps) {
  return (
    <div className="bg-white">
      <Container className="bg-white grid gap-6 p-0 lg:py-12 lg:px-3 relative">
        <div className="lg:flex gap-4 justify-between relative">
          <ImageGallery images={accommodation.images} />
          <AccommodationMainInfoContainer>
            <div className="space-y-1 text-left">
              <Title>{accommodation.name}</Title>
              <Text>{accommodation.address}</Text>
            </div>
            <Separator />
            <Button size="lg" className="w-full rounded-[10px]" asChild>
              <Link href="/plans">
                Quero me hospedar aqui{' '}
                <Icon icon={ArrowRight} variant="white" />
              </Link>
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
          </section>
          <section>
            <Title as="h3" size="sm" className="mb-3">
              Comodidades
            </Title>
            <Features features={accommodation.features} />
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
  );
}
