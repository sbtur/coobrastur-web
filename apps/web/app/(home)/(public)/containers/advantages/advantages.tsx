import { AdvantagesList } from './components/advantages-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';

export const Advantages = () => {
  return (
    <Container as="section" padding="lg" className="bg-white">
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Vantagens</Badge>
          <Title align="center" size="xl">
            O jeito inteligente de viajar
          </Title>
          <Text align="center">
            Confira as principais vantagens em ter uma Assinatura de Hotéis!
          </Text>
        </Heading>
        <AdvantagesList />
      </Container>
    </Container>
  );
};
