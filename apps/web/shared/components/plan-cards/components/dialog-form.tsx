import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@coobrastur/ui/components/data-display/dialog';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';
import {
  ArrowRight,
  BadgeDollarSign,
  Check,
  CreditCard,
  Users,
} from '@coobrastur/ui/lib/icons';

type DialogFormProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
};

export const DialogForm = ({
  isOpen,
  onOpenChange,
  onClose,
}: DialogFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[390px] lg:max-w-[900px] rounded-[20px] mt-4 lg:mt-0 lg:flex lg:p-0 bg-white">
        <DialogClose onClick={onClose} />
        <div className="hidden lg:block bg-secondary-100 p-10 flex-1 space-y-6 rounded-l-[20px]">
          <Title size="sm">Resumo do plano:</Title>
          <div className="space-y-2 w-[340px]">
            <div className="flex items-center gap-4 rounded-[10px] border-2 p-4 bg-white border-highlight">
              <div className="w-6 h-6 rounded-full bg-highlight-100 flex items-center justify-center">
                <Icon icon={Check} variant="white" />
              </div>
              <div>
                <Text className="font-primary text-base text-primary-300 font-bold leading-4">
                  Categoria Silver
                </Text>
                <Text className="text-sm">Hotéis executivos</Text>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-[10px] border-2 p-4 bg-white border-highlight">
              <div className="w-6 h-6 rounded-full bg-highlight-100 flex items-center justify-center">
                <Icon icon={Check} variant="white" />
              </div>
              <div>
                <Text className="font-primary text-base text-primary-300 font-bold leading-4">
                  Categoria Silver
                </Text>
                <Text className="text-sm">Hotéis executivos</Text>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-[10px] border-2 p-4 bg-white border-highlight">
              <div className="w-6 h-6 rounded-full bg-highlight-100 flex items-center justify-center">
                <Icon icon={Check} variant="white" />
              </div>
              <div>
                <Text className="font-primary text-base text-primary-300 font-bold leading-4">
                  Categoria Silver
                </Text>
                <Text className="text-sm">Hotéis executivos</Text>
              </div>
            </div>
          </div>
          <div className="space-y-2 pl-2">
            <Text>
              <Icon icon={CreditCard} variant="highlight" />
              <span className="font-bold ml-2">Não ocupa</span> o limite do seu
              cartão de crédito
            </Text>
            <Text>
              <Icon icon={Users} variant="highlight" />
              <span className="font-bold ml-2">Café da manhã</span> para 2
              pessoas
            </Text>
            <Text>
              <Icon icon={BadgeDollarSign} variant="highlight" />
              <span className="font-bold ml-2">Economize</span> até 60% nas
              diárias
            </Text>
          </div>
          <Separator className="bg-neutral-300" />
          <Text>
            <strong className="text-5xl font-bold font-primary text-primary-300">
              223,90
            </strong>{' '}
            / Por mês
          </Text>
          <Text>
            <strong>Adesão</strong> <s>De: R$800,00</s>{' '}
            <strong className="text-highlight-100">Por: R$400,00</strong>
          </Text>
        </div>
        <div className="lg:flex-1 lg:p-10">
          <DialogHeader>
            <DialogTitle asChild>
              <Title className="text-primary-300 font-primary text-2xl">
                Falta pouco para começar a planejar sua próxima viagem!
              </Title>
            </DialogTitle>
            <DialogDescription>
              Agora, cadastre-se para completar a solicitação e receba o contato
              de um consultor do Grupo Coobrastur para finalizar sua Assinatura
              de Hotéis.
            </DialogDescription>
          </DialogHeader>
          <form action="" className="space-y-4 p-2">
            <div className="space-y-1">
              <Label>Nome</Label>
              <Input placeholder="Nome" />
            </div>
            <div className="space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label>Telefone celular com DDD</Label>
              <Input type="tel" placeholder="Telefone" />
            </div>
            <div className="space-y-1">
              <Label>Estado</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AC">Acre</SelectItem>
                  <SelectItem value="AL">Alagoas</SelectItem>
                  <SelectItem value="AP">Amapá</SelectItem>
                  <SelectItem value="AM">Amazonas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" size="lg" className="w-full mt-4">
              Assine agora <Icon icon={ArrowRight} variant="white" />
            </Button>
          </form>
          <a
            href="https://wa.me/"
            className="block text-center text-sm text-neutral-400 hover:text-gray-700 underline"
          >
            Fale com um consultor no WhatsApp
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
