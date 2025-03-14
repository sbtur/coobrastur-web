import { AccommodationList } from './components/AccommodationList';

import { ACCOMMODATIONS } from '@mocks/accommodations/accommodations';
import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Container } from '@ui/components/Layouts/Container';

export const Accommodations = () => {
  return (
    <Container as="section" padding="lg" className="bg-background">
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Hotéis</Badge>
          <Title align="center" size="xl">
            Os melhores hotéis com café da manhã para 2 pessoas
          </Title>
          <Text align="center">
            Aproveite mais de 2.000 hotéis, resorts e pousadas no Brasil
            <span className="text-highlight font-semibold">
              {' '}
              economizando até 60% nas diárias!
            </span>
          </Text>
        </Heading>

        <AccommodationList accommodations={ACCOMMODATIONS} />
      </Container>
    </Container>
  );
};
