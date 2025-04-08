import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { ArrowRight, CreditCard, Users } from '@coobrastur/ui/lib/icons';

export const Header = () => {
  return (
    <header className="w-full max-w-[450px] relative">
      <div className="w-full max-w-[450px] h-[450px] border border-neutral-200 rounded-md bg-white p-8 flex flex-col justify-between gap-4 shadow-xl fixed">
        <Badge>Gold</Badge>
        <div className="space-y-1 text-left">
          <Title>Intercity Florianópolis</Title>
          <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
        </div>
        <Separator />
        <Button size="lg" className="w-full rounded-[10px]">
          Quero me hospedar aqui <Icon icon={ArrowRight} variant="white" />
        </Button>
        <a
          href="#"
          target="_blank"
          className="text-neutral-400 underline text-center"
        >
          Fale com um consultor no WhatsApp
        </a>
        <Separator />
        <div className="space-y-1">
          <Text className="font-bold text-base text-highlight-100 text-center">
            Garanta sua diária com até 60% de desconto!
          </Text>
          <Text>
            <Icon icon={CreditCard} variant="highlight" className="mr-2" />
            Não ocupa o <span className="font-bold">limite</span> do seu cartão
            de crédito
          </Text>
          <Text>
            <Icon icon={Users} variant="highlight" className="mr-2" />
            Café da manhã para 2 pessoas
          </Text>
        </div>
      </div>
    </header>
  );
};
