import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Link } from '@coobrastur/ui/components/data-entry/link';
import { Icon } from '@ui/components/data-display/icon';
import { ArrowDown } from '@ui/lib/icons';

export const Header = () => {
  return (
    <Section className="bg-gradient-to-b from-white from-25% to-[#E2F2FF] rounded-[30px] mx-8 lg:h-[618px] lg:content-center">
      <Container>
        <Heading className="text-center items-center">
          <Badge>Agência de Viagens</Badge>
          <Title size="xl">Complemente sua viagem</Title>
          <Text className="lg:w-1/2 mx-auto">
            Com nossa Agência exclusiva para assinantes, você garante uma viagem
            completa com toda segurança e atendimento personalizado. 
          </Text>
          <Button type="submit">Fale com a gente</Button>
          <Link className="lg:hidden gap-2">
            Produtos & Serviços <Icon icon={ArrowDown} variant="primary" />
          </Link>
        </Heading>
      </Container>
    </Section>
  );
};
