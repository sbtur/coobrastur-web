import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Container } from '@coobrastur/ui/components/layouts/container';
import {
  ArrowRight,
  Badge,
  Calendar,
  Globe,
  Mail,
  Phone,
  Receipt,
} from '@coobrastur/ui/lib/icons';

import { HeaderPrivate } from '@/shared/components/header';
import { ResponsiveLargerThan } from '@/shared/components/responsive';

import { AccommodationMainInfoContainer } from '../components/accommodation-main-info-container';
import { CollapsibleDescription } from '../components/collapsible-description';
import { Features } from '../components/features';
import { ImageGallery } from '../components/image-gallery';
import { Policies } from './components/policies';

import { Icon } from '@ui/components/data-display/icon';

type AccommodationPrivateProps = {
  accommodation: any;
};

export default function AccommodationPrivate({
  accommodation,
}: AccommodationPrivateProps) {
  return (
    <>
      <ResponsiveLargerThan breakpoint="lg">
        <HeaderPrivate />
      </ResponsiveLargerThan>
      <div className="bg-white">
        <Container className="grid gap-6 p-0 lg:py-12 lg:px-3 relative">
          <div className="lg:flex gap-4 justify-between relative">
            <ImageGallery images={accommodation.images} />
            <AccommodationMainInfoContainer>
              <Badge>Gold</Badge>
              <div className="space-y-1 text-left">
                <Title>{accommodation.name}</Title>
                <Text>{accommodation.address}</Text>
              </div>

              <Separator />

              <Text as="div" className="my-4">
                <span className="font-bold font-primary text-highlight-100 text-2xl">
                  {accommodation.total_days} Diárias
                </span>{' '}
                <br />
                <Icon icon={Receipt} />
                R${accommodation.extra}{' '}
                <Button
                  variant="link"
                  className="inline-block text-neutral-500 underline p-0"
                >
                  adicionais
                </Button>
              </Text>

              <Button size="lg" className="w-full rounded-[10px]">
                Reservar <Icon icon={ArrowRight} variant="white" />
              </Button>
            </AccommodationMainInfoContainer>
          </div>

          <main className="grid gap-8 max-full lg:max-w-[530px] xl:max-w-[790px] px-6 lg:p-0">
            <section>
              <Title as="h3" size="sm" className="mb-3">
                Informações
              </Title>
              <Text>
                Fusce nulla turpis, lobortis eu sollicitudin nec, posuere in
                arcu. Donec facilisis scelerisque lacus. Maecenas a urna nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit metus, ullamcorper vitae ullamcorper quis, mollis at
                risus. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu. Donec facilisis scelerisque lacus. Maecenas a urna
                nisl. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu.
              </Text>
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
              <Features features={accommodation.features} />
            </section>

            <section className="space-y-3">
              <Title as="h3" size="sm" className="mb-3">
                Informações do hotel
              </Title>
              <Text className="flex items-center gap-3">
                <Icon icon={Phone} variant="highlight" />
                (21)3529-1216 - (21) 3231-8031
              </Text>
              <Text className="flex items-center gap-3">
                <Icon icon={Mail} variant="highlight" />
                reservas.arosa@rederiohoteis.com.br
              </Text>
              <Text className="flex items-center gap-3">
                <Icon icon={Globe} variant="highlight" />
                rederiohoteis.com/arosa-hotel-na-lapa
              </Text>
            </section>

            <section className="max-w-[600px]">
              <Title as="h3" size="sm" className="mb-3">
                Períodos de pacote
              </Title>
              <div className="space-y-2">
                <Text className="flex items-center gap-2 text-lg">
                  <Icon icon={Calendar} variant="secondary" />
                  <span className="font-bold">20/05/2025</span> Consciência
                  Negra
                </Text>
                <Text className="flex items-center gap-2 text-lg">
                  <Icon icon={Calendar} variant="secondary" />
                  <span className="font-bold">20/05/2025</span> Carnaval e
                  Desfile das Campeãs
                </Text>
              </div>

              <Text className="mt-3">
                Os{' '}
                <strong className="text-highlight">períodos de pacotes</strong>{' '}
                podem variar conforme a temporada (baixa, média ou alta) e
                regras específicas do pacote, como datas restritas, mínimo de
                noites ou validade para uso.
              </Text>
              <Text className="mt-3">
                Para período(s) de feriado(s) e pacote(s), vide{' '}
                <strong>
                  políticas de cancelamento e multa em caso de no-show
                </strong>{' '}
                no momento da reserva.
              </Text>
            </section>

            <Policies />

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
