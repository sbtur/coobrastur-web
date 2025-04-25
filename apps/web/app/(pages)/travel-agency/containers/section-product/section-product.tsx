import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Link } from '@coobrastur/ui/components/data-entry/link';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { ProductLarger } from './product-larger';
import { ProductMobile } from './product-mobile';

import { Icon } from '@ui/components/data-display/icon';
import { ArrowDown } from '@ui/lib/icons';

export const SectionProduct = () => {
  return (
    <Section>
      <Container>
        <Heading className="text-center items-center">
          <Badge>A melhor agência de viagens para você</Badge>
          <Title size="xl">Nossos produtos e serviços</Title>
          <Text>
            Com nossa Agência exclusiva, você garante uma viagem completa com
            toda segurança e atendimento personalizado.
          </Text>
        </Heading>

        <ProductLarger />
        <ProductMobile />

        <div className="lg:hidden text-center mt-6">
          <Link className="gap-2">
            Quero falar com um consultor
            <Icon icon={ArrowDown} variant="primary" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
