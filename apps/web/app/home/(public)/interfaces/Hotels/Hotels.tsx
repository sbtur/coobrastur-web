import { Badge } from '@workspace/ui/components/DataDisplay/Badge';
import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Text } from '@workspace/ui/components/DataDisplay/Text';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { HotelList } from './components/HotelList';
import { HOTELS } from './helpers';

export const Hotels = () => {
  return (
    <>
      <Container
        size="full"
        as="section"
        padding="lg"
        className="bg-background"
      >
        <Container>
          <Heading align="center">
            <Badge variant="default">Hotéis</Badge>
            <Title align="center" size="xl">
              Encontre os melhores hotéis
            </Title>
            <Text>
              Descubra uma seleção exclusiva de hotéis e resorts para tornar sua
              viagem ainda mais especial. Oferecemos opções que combinam
              conforto, qualidade e experiências únicas.
            </Text>
          </Heading>

          <HotelList hotels={HOTELS} />
        </Container>
      </Container>
    </>
  );
};
