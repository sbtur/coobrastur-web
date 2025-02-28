import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { TestimonialsList } from './components';

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
            Veja o que os membros do Grupo Coobrastur têm a dizer:
          </Text>
        </Heading>
        <TestimonialsList />
      </Container>
    </Container>
  );
};
