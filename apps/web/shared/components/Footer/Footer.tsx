import React from 'react';

import { Container, Title } from '@workspace/ui/components';

import { Link } from '@/shared/components/Link/Link';

import { NAVIGATIONS } from './helpers/navigation';

export const Footer = () => {
  return (
    <Container as="footer" size="full" padding="lg" className="bg-white">
      <Container
        as="section"
        responsive
        className="grid grid-cols-4 gap-10 pl-28"
      >
        {NAVIGATIONS.map(navigation => (
          <Container className="flex flex-col gap-3" key={navigation.title}>
            <Title as="h2" size="xs">
              {navigation.title}
            </Title>
            {navigation.items.map(item => (
              <Link href={item.href} variant="neutral" key={item.label}>
                {item.label}
              </Link>
            ))}
          </Container>
        ))}
      </Container>
    </Container>
  );
};
