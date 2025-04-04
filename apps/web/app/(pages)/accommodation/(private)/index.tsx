import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Calendar, Globe, Mail, Phone } from '@coobrastur/ui/lib/icons';

import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';
import { Policies } from '../components/policies';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Icon } from '@ui/components/data-display/icon';
import { Separator } from '@ui/components/data-display/separator';
import { Button } from '@ui/components/data-entry/button';

export default function AccommodationPrivate() {
  return (
    <Container className="py-12">
      <Heading className="p-0 gap-0">
        <Badge className="mb-2">Gold</Badge>
        <Title>Intercity Florianópolis</Title>
        <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
      </Heading>

      <ImageGallery />

      <div className="flex gap-4 justify-between mt-8">
        <main className="grid flex-1 gap-4 md:pr-10">
          <section>
            <Title as="h3" size="sm" className="mb-3">
              Informações
            </Title>
            <Text>
              Fusce nulla turpis, lobortis eu sollicitudin nec, posuere in arcu.
              Donec facilisis scelerisque lacus. Maecenas a urna nisl. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
              metus, ullamcorper vitae ullamcorper quis, mollis at risus. Fusce
              nulla turpis, lobortis eu sollicitudin nec, posuere in arcu. Donec
              facilisis scelerisque lacus. Maecenas a urna nisl. Fusce nulla
              turpis, lobortis eu sollicitudin nec, posuere in arcu.
            </Text>
            <CollapsibleDescription>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                velit metus, ullamcorper vitae ullamcorper quis, mollis at
                risus. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu. Donec facilisis scelerisque lacus. Maecenas a urna
                nisl. Fusce nulla turpis, lobortis eu sollicitudin nec, posuere
                in arcu.
              </Text>
            </CollapsibleDescription>
          </section>
          <section>
            <Title as="h3" size="sm" className="mb-3">
              Comodidades
            </Title>
            <Amenities
              amenities={[
                'airConditioner',
                'bar',
                'cableTv',
                'fan',
                'heating',
                'pool',
              ]}
            />
          </section>
          <section className="space-y-3">
            <Title as="h3" size="sm" className="mb-3">
              Informações do hotel
            </Title>
            <Text className="flex items-center gap-3">
              <Icon icon={Phone} variant="primary" />
              (21)3529-1216 - (21) 3231-8031
            </Text>
            <Text className="flex items-center gap-3">
              <Icon icon={Mail} variant="primary" />
              reservas.arosa@rederiohoteis.com.br
            </Text>
            <Text className="flex items-center gap-3">
              <Icon icon={Globe} variant="primary" />
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
                <span className="font-bold">20/05/2025</span> Consciência Negra
              </Text>
              <Text className="flex items-center gap-2 text-lg">
                <Icon icon={Calendar} variant="secondary" />
                <span className="font-bold">20/05/2025</span> Carnaval e Desfile
                das Campeãs
              </Text>
            </div>
            <Text className="mt-3">
              Os <strong className="text-highlight">períodos de pacotes</strong>{' '}
              podem variar conforme a temporada (baixa, média ou alta) e regras
              específicas do pacote, como datas restritas, mínimo de noites ou
              validade para uso.
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
        <aside className="w-[450px]">
          <div className="grid gap-3 place-items-center rounded-[20px] bg-white p-9 shadow-lg">
            <Badge>Gold</Badge>
            <Title>Intercity Florianópolis</Title>
            <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
            <Separator />
            <Button size="lg" className="w-full">
              Assine e planeje sua viagem
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
}
