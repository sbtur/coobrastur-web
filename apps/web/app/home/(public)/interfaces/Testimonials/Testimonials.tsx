import {
  Badge,
  Container,
  Heading,
  Text,
  Title,
} from '@workspace/ui/components';

export const Testimonials = () => {
  return (
    <Container
      as="section"
      size="full"
      padding="lg"
      className="bg-gradient-to-t from-gray-50 to-white"
    >
      <Container>
        <Heading align="center">
          <Badge variant="default">Depoimentos</Badge>
          <Title align="center" size="xl">
            Junte-se a mais de 75 mil assinantes
          </Title>
          <Text>Veja o que os membros do Grupo Coobrastur têm a dizer:</Text>
        </Heading>
      </Container>
    </Container>
  );
};
