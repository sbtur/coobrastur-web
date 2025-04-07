import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { PlanCards, PlanCardsMobile } from '@/shared/components/plan-card';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';

export const SubscriptionPlans = () => {
  return (
    <Section className="bg-primary-300">
      <Container>
        <Heading className="text-center items-center">
          <Title size="xl" variant="white">
            Escolha seu plano de Assinatura de Hotéis{' '}
          </Title>
          <Text className="text-white">
            A partir de 7 diárias ao ano com validade de{' '}
            <strong>36 meses para utilização!</strong>
          </Text>
        </Heading>
      </Container>
      <ResponsiveSmallerThan breakpoint="md">
        <PlanCardsMobile />
      </ResponsiveSmallerThan>
      <ResponsiveLargerThan breakpoint="md">
        <PlanCards />
      </ResponsiveLargerThan>
    </Section>
  );
};
