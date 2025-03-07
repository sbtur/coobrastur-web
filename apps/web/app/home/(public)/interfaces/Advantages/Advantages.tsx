import { Badge } from '@coobrastur/ui/components/DataDisplay/Badge';
import { Heading } from '@coobrastur/ui/components/DataDisplay/Heading';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Container } from '@coobrastur/ui/components/Layouts/Container';

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
