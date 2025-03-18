import { TestimonialsList } from './components';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Container } from '@ui/components/Layouts/Container';

export const Testimonials = () => {
  return (
    <Container
      as="section"
      padding="lg"
      className="bg-gradient-to-t from-gray-50 to-white"
    >
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Depoimentos</Badge>
          <Title align="center" size="xl">
            Junte-se a mais de 75 mil assinantes
          </Title>
          <Text align="center">
            Veja o que os viajantes do Grupo Coobrastur têm a dizer sobre nossa
            Assinatura de Hotéis
          </Text>
        </Heading>
        <TestimonialsList />
      </Container>
    </Container>
  );
};
