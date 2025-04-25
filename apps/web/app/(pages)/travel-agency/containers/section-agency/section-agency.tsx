// 'use client'

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { SectionAgencyDesktop } from './section-agency-desktop';
import { SectionAgencyMobile } from './section-agency-mobile';

export const SectionAgency = () => {
  return (
    <Section>
      <Container>
        <Heading className="text-center">
          <Title size="xl">Por que escolher nossa agência?</Title>
          <Text>Segurança e diversidade em cada uma das suas aventuras.</Text>
        </Heading>

       <SectionAgencyDesktop />
       <SectionAgencyMobile />
      </Container>
    </Section>
  );
};
