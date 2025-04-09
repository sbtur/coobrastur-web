'use client';
import { Section } from '@coobrastur/ui/components/layouts/section';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Policies } from './components/policies';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Image } from '@components/image';

import { PlanCards, PlanCardsMobile } from '@/shared/components/plan-cards';
import {
  ResponsiveLargerThan,
  ResponsiveSmallerThan,
} from '@/shared/components/responsive';

export const Plans = () => {
  return (
    <Section className="bg-primary-300">
      <Container className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-full pl-4 md:pl-14 space-y-4">
              <Badge variant="default">Vantagens</Badge>
              <Title className="text-white" size="xl">
                Descubra o jeito inteligente de viajar
              </Title>
              <Text className="text-white">
                Junte-se ao melhor clube de assinatura de viagens do Brasil e
                aproveite as melhores vantagens.
              </Text>
            </div>
          </div>
        </div>

        <ResponsiveSmallerThan breakpoint="md">
          <PlanCardsMobile />
        </ResponsiveSmallerThan>
        <ResponsiveLargerThan breakpoint="md">
          <PlanCards />
        </ResponsiveLargerThan>
        <Policies />

        <div className="flex mt-11 mb-60 items-center md:items-start md:gap-5">
          <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <Title size="sm" className="mb-1.5 text-left">
              Tem alguma dúvida?
            </Title>
            <Text size="sm" className="mb-4 text-left">
              Preencha as informações abaixo e receba o contato da nossa equipe
              para mais informações.
            </Text>

            <div className="space-y-2">
              <div className="md:flex gap-4">
                <div className="space-y-1 flex-1 text-left">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Placeholder"
                    className="w-full"
                  />
                </div>
                <div className="space-y-1 flex-1 text-left">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Placeholder"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-1 text-left">
                <Label htmlFor="message">Assunto</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                  placeholder="Digite sua mensagem"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-highlight-100 text-white"
              >
                Quero falar com um especialista
              </Button>
            </div>
          </form>

          <div className="flex-1 overflow-hidden rounded-lg">
            <Image
              src="/images/pages/home/advantages-featured.gif"
              alt="Hotel"
              width={490}
              height={408}
              className="w-[490px] h-[408px] object-cover"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
