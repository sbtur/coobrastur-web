import { Badge, Container, Heading } from '@workspace/ui/components';

export const Testimonials = () => {
  return (
    <Container
      as="section"
      size="full"
      padding="lg"
      className="bg-gradient-to-t from-gray-50 to-white"
    >
      <Container>
        <Heading.Root align="center">
          <Badge variant="default">Depoimentos</Badge>
          <Heading.Title align="center" size="xl">
            Junte se a mais de 75 mil assinantes
          </Heading.Title>
          <Heading.Text>
            Veja o que os membros do Grupo Coobrastur têm a dizer:
          </Heading.Text>
        </Heading.Root>
      </Container>
    </Container>
  );
};
