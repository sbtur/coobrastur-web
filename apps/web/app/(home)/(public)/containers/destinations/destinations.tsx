import { Section } from '@coobrastur/ui/components/layouts/section';

import { HotelList } from './components/hotel-list';
import { DESTINATIONS } from './helpers';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';

export const Destinations = () => {
  return (
    <Section>
      <Container>
        <Heading align="center">
          <Badge variant="default">Destinos</Badge>
          <Title align="center" size="xl">
            Escolha o destino dos seus sonhos
          </Title>
          <Text align="center">
            Aqui, você encontra os destinos mais incríveis com as melhores
            acomodações.
          </Text>
        </Heading>

        <HotelList hotels={DESTINATIONS} />
      </Container>
    </Section>
  );
};
