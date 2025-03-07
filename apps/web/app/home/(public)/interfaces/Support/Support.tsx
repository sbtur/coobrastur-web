import { SupportList } from './components/SupportList/SupportList';

import { Badge } from '@ui/components/DataDisplay/Badge';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Text } from '@ui/components/DataDisplay/Text';
import { Title } from '@ui/components/DataDisplay/Title';
import { Container } from '@ui/components/Layouts/Container';

export const Support = () => {
  return (
    <Container
      as="section"
      padding="lg"
      className="bg-[#254262] bg-gradient-to-r from-[rgba(47,98,153,0)] from-[31.41%] to-[#2F6299] to-[129.86%]"
    >
      <Container size="xl" className="lg:pt-24">
        <Heading align="left">
          <Badge variant="default">Tudo o que precisa para a sua viagem</Badge>
          <Title size="xl" variant="white" align="left">
            Conte com suporte completo
          </Title>
          <Text className="text-white" align="left">
            A combinação ideal para transformar sua viagem dos sonhos em uma
            experiência única e inesquecível
          </Text>
        </Heading>

        <SupportList />
      </Container>
    </Container>
  );
};
