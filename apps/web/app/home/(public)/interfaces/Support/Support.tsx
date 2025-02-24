import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { Card } from './components/Card';
import { SUPPORT } from './helpers';

export const Support = () => {
  return (
    <Container
      size="full"
      as="section"
      padding="lg"
      className="bg-[#254262] bg-gradient-to-r from-[rgba(47,98,153,0)] from-[31.41%] to-[#2F6299] to-[129.86%]"
    >
      <Container>
        <Heading align="left">
          <Badge variant="default">Suporte</Badge>
          <Title size="xl" variant="white">
            Suporte especializado para você
          </Title>
          <Text className="text-white">
            Conte com nossa equipe de especialistas para te ajudar a escolher o
            melhor destino.
          </Text>
        </Heading>
        <Container className="flex gap-2 mt-6">
          {SUPPORT.map(support => (
            <Card key={support.title} content={support} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
