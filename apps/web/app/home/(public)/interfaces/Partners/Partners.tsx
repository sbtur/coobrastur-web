import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { PartnersList } from './components/PartnersList';

export const Partners = () => {
  return (
    <Container as="section" padding="lg" className="bg-background">
      <Container size="xl" className="md:flex gap-10">
        <Heading
          align="center"
          className="md:w-6/12 xl:w-4/12 p-0 md:text-left md:items-start"
        >
          <Badge variant="default">Hotéis Parceiros</Badge>
          <Title size="xl">Principais redes</Title>
          <Text align="center" className="md:text-left">
            Encontre as melhores redes hoteleiras aqui.
          </Text>
        </Heading>

        <PartnersList />
      </Container>
    </Container>
  );
};
