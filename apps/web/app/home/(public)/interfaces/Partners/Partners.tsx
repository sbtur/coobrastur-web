import { Badge } from '@coobrastur/ui/components/DataDisplay/Badge';
import { Heading } from '@coobrastur/ui/components/DataDisplay/Heading';
import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Container } from '@coobrastur/ui/components/Layouts/Container';

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
