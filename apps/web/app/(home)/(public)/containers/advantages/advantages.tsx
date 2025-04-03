import { Content } from '@coobrastur/ui/components/layouts/content';

import { Image } from '@components/image';

import {
  AdvantagesListDesktop,
  AdvantagesListMobile,
} from './components/advantages-list';

import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Advantages = () => {
  return (
    <Section as="section">
      <Container>
        <Heading className="items-center text-center lg:w-full">
          <Badge variant="default">Vantagens</Badge>
          <Title size="xl">Descubra o jeito inteligente de viajar</Title>
          <Text>
            Confira as principais vantagens em ter uma Assinatura de Hotéis!
          </Text>
        </Heading>
        <Content>
          <AdvantagesListDesktop />
          <AdvantagesListMobile />
        </Content>
      </Container>
      <div className="mt-4 overflow-hidden lg:hidden">
        <Image
          src="/images/pages/home/advantages-featured.gif"
          alt="Hotel"
          width={610}
          height={408}
          className="w-full"
        />
      </div>
    </Section>
  );
};
