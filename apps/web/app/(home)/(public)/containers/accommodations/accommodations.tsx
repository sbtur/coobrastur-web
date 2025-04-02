import { AccommodationList } from './components/accommodation-list';

import { ACCOMMODATIONS } from '@mocks/accommodations/accommodations';
import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Accommodations = () => {
  return (
    <Section as="section">
      <Container>
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
    </Section>
  );
};
