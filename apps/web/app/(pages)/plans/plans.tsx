'use client';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { FAQ } from './components/faq';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Image } from '@components/image';

import { PlanCards, PlanCardsMobile } from '@/shared/components/plan-cards';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';
import { Heading } from '@coobrastur/ui/components/data-display/heading';

export const Plans = () => {
  return (
    <Section className="bg-primary-300">
      <Container>
        <Heading className="text-center items-center">
          <Badge>Vantagens</Badge>
          <Title className="text-white" size="xl">
            Descubra o jeito inteligente de viajar
          </Title>
          <Text className="text-white">
            Junte-se ao melhor clube de assinatura de viagens do Brasil e
            aproveite as melhores vantagens.
          </Text>
        </Heading>

        <ResponsiveSmallerThan breakpoint="md">
          <PlanCardsMobile />
        </ResponsiveSmallerThan>
        <ResponsiveLargerThan breakpoint="md">
          <PlanCards />
        </ResponsiveLargerThan>

        <FAQ />
        
        <div className="flex justify-center mt-11 mb-60 md:gap-5">
          <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-3xl">
            <Heading>
              <Title size="sm">Tem alguma dúvida?</Title>
              <Text size="sm">
                Preencha as informações abaixo e receba o contato da nossa
                equipe para mais informações.
              </Text>
            </Heading>

            <div className="space-y-2">
              <div className="md:flex gap-4">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Placeholder"
                    className="w-full"
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Placeholder"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Assunto</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                  placeholder="Digite sua mensagem"
                />
              </div>
              <Button type="submit" className="w-full">
                Quero falar com um especialista
              </Button>
            </div>
          </form>

          <div className="hidden xl:block overflow-hidden rounded-lg">
            <Image
              src="/images/pages/home/advantages-featured.gif"
              alt="Hotel"
              width={490}
              height={408}
              className="w-[490px] h-[435px] object-cover"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
