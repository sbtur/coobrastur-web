import React from 'react';

import { Badge, Container, Heading } from '@workspace/ui/components';

import { Card } from './components/Card';
import { SUPPORT } from './helpers/support';

export const Support = () => {
  return (
    <Container
      size="full"
      as="section"
      padding="lg"
      className="bg-[#254262] bg-gradient-to-r from-[rgba(47,98,153,0)] from-[31.41%] to-[#2F6299] to-[129.86%]"
    >
      <Container>
        <Heading.Root align="left">
          <Badge variant="default">Tudo o que precisa para a sua viagem</Badge>
          <Heading.Title size="xl" variant="white">
            Conte com suporte completo
          </Heading.Title>
          <Heading.Text className="text-white">
            A combinação ideal para transformar sua viagem dos sonhos em uma
            experiência única e inesquecível
          </Heading.Text>
        </Heading.Root>
        <Container className="flex gap-2 mt-6">
          {SUPPORT.map(support => (
            <Card key={support.title} content={support} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};
