import { AdvantagesList } from './components/advantages-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Advantages = () => {
  return (
    <Section as="section">
      <Container>
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
    </Section>
  );
};
