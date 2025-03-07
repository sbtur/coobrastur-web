import { HotelList } from './components/HotelList';
import { HOTELS } from './helpers';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Container } from '@ui/components/Layouts/Container';

export const Hotels = () => {
  return (
    <Container as="section" padding="lg" className="bg-background">
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Hotéis</Badge>
          <Title align="center" size="xl">
            Encontre os melhores hotéis
          </Title>
          <Text align="center">
            Descubra uma seleção exclusiva de hotéis e resorts para tornar sua
            viagem ainda mais especial. Oferecemos opções que combinam conforto,
            qualidade e experiências únicas.
          </Text>
        </Heading>

        <HotelList hotels={HOTELS} />
      </Container>
    </Container>
  );
};
