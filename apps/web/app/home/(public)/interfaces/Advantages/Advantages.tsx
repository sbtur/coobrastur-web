import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { AdvantagesList } from './components/AdvantagesList';

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
