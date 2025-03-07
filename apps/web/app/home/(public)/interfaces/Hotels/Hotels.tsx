import { Badge } from '@coobrastur/ui/components/DataDisplay/Badge';
import { Heading } from '@coobrastur/ui/components/DataDisplay/Heading';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Container } from '@coobrastur/ui/components/Layouts/Container';

import { HotelList } from './components/HotelList';
import { HOTELS } from './helpers';

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
