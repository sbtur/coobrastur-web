import { Button } from '@coobrastur/ui/components/button';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Separator } from '@coobrastur/ui/components/separator';

import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';

export default function AccommodationPublic() {
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
