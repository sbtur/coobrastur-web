import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { PartnersList } from './components/PartnersList';

export const Partners = () => {
  return (
    <Container as="section" size="full" padding="lg" className="bg-background">
      <Container className="flex gap-10 justify-between">
        <Heading align="left">
          <Badge variant="default">Hotéis Parceiros</Badge>
          <Title size="lg">Principais redes</Title>
          <Text>
            Conheça algumas das principais redes de hotéis parceiras da
            Coobrastur
          </Text>
        </Heading>
        <PartnersList />
      </Container>
    </Container>
  );
};
