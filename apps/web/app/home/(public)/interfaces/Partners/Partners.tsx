import { Badge, Container, Heading } from '@workspace/ui/components';

import { PartnersList } from './components/PartnersList';

export const Partners = () => {
  return (
    <Container as="section" size="full" padding="lg" className="bg-background">
      <Container className="flex gap-10 justify-between">
        <Heading.Root align="left">
          <Badge variant="default">Hotéis Parceiros</Badge>
          <Heading.Title size="lg">Principais redes</Heading.Title>
          <Heading.Text>
            Encontre as melhores redes hoteleiras aqui.
          </Heading.Text>
        </Heading.Root>
        <PartnersList />
      </Container>
    </Container>
  );
};
