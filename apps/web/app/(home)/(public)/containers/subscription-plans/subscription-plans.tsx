import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { PlanCard } from '@/shared/components/plan-card/plan-card';

export const SubscriptionPlans = () => {
  return (
    <Section className="bg-primary">
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
      <PlanCard />
    </Section>
  );
};
