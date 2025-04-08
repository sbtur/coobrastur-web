import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';

import { HeaderPublic } from '@/shared/components/header';

import { Amenities } from '../components/amenities';
import { CollapsibleDescription } from '../components/collapsible-description';
import { ImageGallery } from '../components/image-gallery';
import { Header } from './components/header';

import { Text } from '@ui/components/data-display/text';

export default function AccommodationPublic() {
  return (
    <>
      <HeaderPublic />
      <Container className="grid gap-6 py-12 relative">
        <div className="flex gap-4 justify-between relative">
          <ImageGallery />
          <Header />
        </div>

        <main className="grid gap-8 max-w-[790px] md:pr-10">
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
    </>
  );
}
