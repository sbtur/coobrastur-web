import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Calendar, Globe, Mail, Phone } from '@coobrastur/ui/lib/icons';

import { HeaderPrivate } from '@/shared/components/header';
import { ResponsiveLargerThan } from '@/shared/components/responsive';

import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';
import { AccommodationMainInfoPrivate } from './components/accommodation-main-info-private';
import { Policies } from './components/policies';

import { Icon } from '@ui/components/data-display/icon';

export default function AccommodationPrivate() {
  return (
    <>
      <ResponsiveLargerThan breakpoint="lg">
        <HeaderPrivate />
      </ResponsiveLargerThan>
      <div className="bg-white">
        <Container className="grid gap-6 p-0 lg:py-12 lg:px-3 relative">
          <div className="lg:flex gap-4 justify-between relative">
            <ImageGallery />
            <AccommodationMainInfoPrivate />
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
              <Amenities amenities={[1, 10, 6, 7, 2, 5]} />
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
