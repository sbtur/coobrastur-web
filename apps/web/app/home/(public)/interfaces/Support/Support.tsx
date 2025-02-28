import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { SupportList } from './components/SupportList/SupportList';

export const Support = () => {
  return (
    <Container
      as="section"
      padding="lg"
      className="bg-[#254262] bg-gradient-to-r from-[rgba(47,98,153,0)] from-[31.41%] to-[#2F6299] to-[129.86%]"
    >
      <Container size="xl">
        <Heading align="center">
          <Badge variant="default">Suporte</Badge>
          <Title size="xl" variant="white" align="center">
            Suporte especializado para você
          </Title>
          <Text className="text-white" align="center">
            Conte com nossa equipe de especialistas para te ajudar a escolher o
            melhor destino.
          </Text>
        </Heading>

        <SupportList />
      </Container>
    </Container>
  );
};
