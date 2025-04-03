import { PartnersList } from './components/partners-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Partners = () => {
  return (
    <Section as="section">
      <Container className="md:flex gap-10">
        <Heading className="md:w-4/12 xl:w-4/12 p-0 text-center items-center md:text-left md:items-start">
          <Badge variant="default">Hotéis Parceiros</Badge>
          <Title size="xl">Experiências de hospedagem</Title>
          <Text className="w-[300px]">
            As principais redes hoteleiras do mundo estão aqui.
          </Text>
        </Heading>

        <PartnersList />
      </Container>
    </Section>
  );
};
