import { Badge, Container, Heading, HotelCard } from '@workspace/ui/components';

import { DESTINATIONS } from './helpers';

export const Destinations = () => {
  return (
    <Container as="section" padding="lg" size="full" className="bg-white">
      <Container>
        <Heading.Root align="center">
          <Badge variant="default">Destinos</Badge>
          <Heading.Title align="center" size="xl">
            Escolha o destino dos seus sonhos
          </Heading.Title>
          <Heading.Text>
            Aqui, você encontra os destinos mais incríveis com as melhores
            acomodações.
          </Heading.Text>
        </Heading.Root>

        <Container className="grid grid-cols-5 gap-2 mt-6">
          {DESTINATIONS.slice(0, 5).map(hotel => (
            <HotelCard
              size="sm"
              key={hotel.id}
              address={hotel.state.name}
              href={hotel.absolute_url}
              image={{
                alt: hotel.city.name,
                src: hotel.image,
              }}
              title={hotel.city.name}
              actionLabel="Saiba mais"
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
