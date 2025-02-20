import { Badge, Container, Heading, HotelCard } from '@workspace/ui/components';

import { HOTELS } from './helpers/hotels';

export const Hotels = () => {
  return (
    <Container size="full" as="section" padding="lg" className="bg-background">
      <Container>
        <Heading.Root align="center">
          <Badge variant="default">Hotéis</Badge>
          <Heading.Title align="center" size="xl">
            Hotéis para todos os estilos de viagem
          </Heading.Title>
          <Heading.Text>
            Mais de 2.000 hotéis, pousadas e resorts te esperam!{' '}
            <span className="text-text-highlight font-bold">
              Economize até 60%
            </span>{' '}
            comparado a outros sites de hospedagem!
          </Heading.Text>
        </Heading.Root>
        <Container className="grid grid-cols-4 gap-2 mt-6">
          {HOTELS.slice(0, 4).map(hotel => (
            <HotelCard
              key={hotel.id}
              address={hotel.street}
              href={hotel.absolute_url}
              image={{
                alt: hotel.name,
                src: hotel.image,
              }}
              title={hotel.name}
              actionLabel="Ver mais detalhes"
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
