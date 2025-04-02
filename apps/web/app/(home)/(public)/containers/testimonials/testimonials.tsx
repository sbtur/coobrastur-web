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
        <Heading align="center">
          <Badge variant="default">Depoimentos</Badge>
          <Title align="center" size="xl">
            Junte-se a mais de 75 mil assinantes
          </Title>
          <Text align="center" className="!max-w-full">
            Veja o que os viajantes do Grupo Coobrastur têm a dizer sobre nossa
            Assinatura de Hotéis
          </Text>
        </Heading>
        <TestimonialsList />
      </Container>
    </Section>
  );
};
