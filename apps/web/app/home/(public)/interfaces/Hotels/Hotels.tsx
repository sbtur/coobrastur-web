import { HotelCard } from '@workspace/ui/components/Blocks/HotelCard';
import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { HOTELS } from './helpers';

export const Hotels = () => {
  return (
    <Container size="full" as="section" padding="lg" className="bg-background">
      <Container>
        <Heading align="center">
          <Badge variant="default">Hotéis</Badge>
          <Title align="center" size="xl">
            Encontre os melhores hotéis
          </Title>
          <Text>
            Descubra uma seleção exclusiva de hotéis e resorts para tornar sua
            viagem ainda mais especial. Oferecemos opções que combinam conforto,
            qualidade e experiências únicas.
          </Text>
        </Heading>
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
