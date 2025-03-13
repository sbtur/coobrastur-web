import { AdvantagesList } from './components/AdvantagesList';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Container } from '@ui/components/Layouts/Container';

export const Advantages = () => {
  return (
    <Container as="section" padding="lg" className="bg-white">
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Vantagens</Badge>
          <Title align="center" size="xl">
            Descubra o jeito inteligente de viajar
          </Title>
          <Text align="center">
            Junte-se ao melhor clube de assinatura de viagens do Brasil e
            aproveite as melhores vantagens.
          </Text>
        </Heading>
        <AdvantagesList />
      </Container>
    </Container>
  );
};
