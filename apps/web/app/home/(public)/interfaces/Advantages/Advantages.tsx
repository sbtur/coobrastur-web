import { Badge, Container, Heading } from '@workspace/ui/components';

export const Advantages = () => {
  return (
    <Container as="section" padding="lg" size="full" className="bg-white">
      <Container>
        <Heading.Root align="center">
          <Badge variant="default">Vantagens</Badge>
          <Heading.Title align="center" size="xl">
            Descubra o jeito inteligente de viajar
          </Heading.Title>
          <Heading.Text>
            Junte-se ao melhor clube de assinatura de viagens do Brasil e
            aproveite as melhores vantagens.
          </Heading.Text>
        </Heading.Root>
      </Container>
    </Container>
  );
};
