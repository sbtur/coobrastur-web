import { Badge, Container, Heading } from '@workspace/ui/components';

import { Image } from '@components';

import { Card } from './components/Card';
import { ADVANTAGES } from './helpers';

export const Advantages = () => {
  return (
    <Container as="section" padding="lg" size="full" className="bg-white">
      <Container>
        <Heading.Root align="center">
          <Badge variant="default">Vantagens</Badge>
          <Heading.Title align="center" size="xl">
            Descubra o jeito inteligente de viajar
          </Heading.Title>
          <Heading.Text>
            Junte-se ao melhor clube de assinatura de viagens do Brasil e
            aproveite as melhores vantagens.
          </Heading.Text>
        </Heading.Root>
        <div className="flex justify-center items-center">
          <div className="flex gap-2 mt-4">
            <div className="flex flex-col gap-4">
              <Card advantage={ADVANTAGES[0]} />
              <Card advantage={ADVANTAGES[1]} />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/pages/home/advantages-featured.png"
                alt="Hotel"
                width={610}
                height={408}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Card advantage={ADVANTAGES[2]} />
              <Card advantage={ADVANTAGES[3]} />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
