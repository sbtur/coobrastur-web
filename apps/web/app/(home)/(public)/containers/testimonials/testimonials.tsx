import { TestimonialsList } from './components';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Testimonials = () => {
  return (
    <Section as="section">
      <Container>
        <Heading className="items-center text-center">
          <Badge variant="default">Depoimentos</Badge>
          <Title size="xl">Junte-se a mais de 75 mil assinantes</Title>
          <Text className="!max-w-full">
            Veja o que os viajantes do Grupo Coobrastur têm a dizer sobre nossa
            Assinatura de Hotéis
          </Text>
        </Heading>
        <TestimonialsList />
      </Container>
    </Section>
  );
};
