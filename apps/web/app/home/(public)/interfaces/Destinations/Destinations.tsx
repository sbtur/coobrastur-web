import { HotelCard } from '@workspace/ui/components/Blocks/HotelCard';
import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { DESTINATIONS } from './helpers';

export const Destinations = () => {
  return (
    <Container as="section" padding="lg" size="full" className="bg-white">
      <Container>
        <Heading align="center">
          <Badge variant="default">Destinos</Badge>
          <Title align="center" size="xl">
            Escolha o destino dos seus sonhos
          </Title>
          <Text>
            Aqui, você encontra os destinos mais incríveis com as melhores
            acomodações.
          </Text>
        </Heading>

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
