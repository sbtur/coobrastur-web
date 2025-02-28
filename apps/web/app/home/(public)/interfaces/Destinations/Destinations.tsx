import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { HotelList } from './components/HotelList/HotelList';
import { DESTINATIONS } from './helpers';

export const Destinations = () => {
  return (
    <Container as="section" padding="lg" className="bg-white">
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Destinos</Badge>
          <Title align="center" size="xl">
            Escolha o destino dos seus sonhos
          </Title>
          <Text align="center">
            Aqui, você encontra os destinos mais incríveis com as melhores
            acomodações.
          </Text>
        </Heading>

        <HotelList hotels={DESTINATIONS} />
      </Container>
    </Container>
  );
};
