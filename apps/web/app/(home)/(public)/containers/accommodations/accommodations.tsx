import { AccommodationList } from './components/accommodation-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Accommodations = () => {
  return (
    <Section as="section">
      <Container>
        <Heading className="items-center text-center">
          <Badge variant="default">Hotéis</Badge>
          <Title size="xl" className="md:w-[600px]">
            Os melhores hotéis com café da manhã para 2 pessoas
          </Title>
          <Text>
            Aproveite mais de 2.000 hotéis, resorts e pousadas no Brasil <br />
            <span className="text-highlight font-semibold">
              economizando até 60% nas diárias!
            </span>
          </Text>
        </Heading>

        <AccommodationList accommodations={[]} />
      </Container>
    </Section>
  );
};
