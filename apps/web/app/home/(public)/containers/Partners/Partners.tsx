import { PartnersList } from './components/partners-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';

export const Partners = () => {
  return (
    <Container as="section" padding="lg" className="bg-background">
      <Container size="xl" className="md:flex gap-10">
        <Heading
          align="center"
          className="md:w-6/12 xl:w-4/12 p-0 md:text-left md:items-start"
        >
          <Badge variant="default">Hotéis Parceiros</Badge>
          <Title size="xl">Experiências de hospedagem</Title>
          <Text align="center" className="md:text-left">
            As principais redes hoteleiras do mundo estão aqui.
          </Text>
        </Heading>

        <PartnersList />
      </Container>
    </Container>
  );
};
