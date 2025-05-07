'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarClock } from 'lucide-react';
import { z } from 'zod';

import { Alert } from '@coobrastur/ui/components/data-display/alert';
import { Badge } from '@coobrastur/ui/components/data-display/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@coobrastur/ui/components/data-display/dialog';
import { Icon } from '@coobrastur/ui/components/data-display/icon/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';
import { Input } from '@coobrastur/ui/components/data-entry/input';

import { byRequestSchema } from '@/app/search-place/schema/by-request';
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
} from '@/shared/utils/plans/categories';

import { zodResolver } from '@hookform/resolvers/zod';

export type Accommodation = {
  name: string;
  street: string;
  totalDays: number;
  category: string;
};

type ByRequestDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  accommodation: Accommodation;
};

export const ByRequestDialog = ({
  open,
  onOpenChange,
  accommodation,
}: ByRequestDialogProps) => {
  const form = useForm<z.infer<typeof byRequestSchema>>({
    resolver: zodResolver(byRequestSchema),
  });

  const [isShowFeedback, setIsShowFeedback] = useState(false);

  const params = useSearchParams();

  let startDate = params.get('startDate');
  let endDate = params.get('endDate');

  if (startDate && endDate) {
    startDate = format(parse(startDate, 'dd/MM/yyyy', new Date()), 'd', {
      locale: ptBR,
    });
    endDate = format(parse(endDate, 'dd/MM/yyyy', new Date()), 'd MMM', {
      locale: ptBR,
    });
  }

  const onSubmit = () => {
    setIsShowFeedback(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        {!isShowFeedback ? (
          <Form form={form} onSubmit={onSubmit}>
            <div className="p-14 pb-4">
              <DialogHeader className="text-left">
                <Title>Solicitar disponibilidade</Title>
                <Text>
                  Preencha os dados a seguir para enviar a solicitação de
                  disponibilidade ao hotel.
                </Text>
              </DialogHeader>
              <div className="grid gap-3 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nome" id="name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Email" id="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator />
            <div className="pt-4 px-14">
              <div className="space-y-4">
                <Badge
                  variant={
                    CATEGORY_COLORS[
                      accommodation.category as keyof typeof CATEGORY_COLORS
                    ]
                  }
                  className="mb-4"
                >
                  {
                    CATEGORY_LABELS[
                      accommodation.category as keyof typeof CATEGORY_LABELS
                    ]
                  }
                </Badge>
                <Title as="h3">{accommodation.name}</Title>
                <Text>{accommodation.street}</Text>
                <div className="flex gap-2">
                  <Text
                    as="div"
                    className="flex gap-2 w-[120px] justify-center items-center border border-neutral-300 rounded-[10px] p-2"
                  >
                    <Icon icon="/images/icons/calendar-outline.svg" />
                    <span>
                      {startDate} - {endDate}
                    </span>
                  </Text>
                  <Text
                    as="div"
                    className="flex gap-2 justify-center items-center border border-neutral-300 rounded-[10px] p-2"
                  >
                    <Icon icon="/images/icons/user.svg" />
                    <span>1 quarto, 2 hóspedes</span>
                  </Text>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <Text className="text-neutral-400">Diárias utilizadas</Text>
                  <Text className="text-highlight font-bold">
                    {accommodation.totalDays} Diárias
                  </Text>
                </div>
                <Separator />
              </div>
            </div>
            <button className="w-full bg-primary-200 h-[90px] text-white text-base font-bold rounded-b-[20px]">
              Solicitar Reserva <Icon icon={CalendarClock} variant="white" />
            </button>
          </Form>
        ) : null}

        {isShowFeedback ? (
          <>
            <div className="p-14 pb-10">
              <DialogHeader>
                <Icon
                  icon={CalendarClock}
                  className="w-8 h-8 mb-4 text-primary-200 mx-auto"
                />
                <Title className="text-center">
                  Sua solicitação está sob consulta!
                </Title>
                <Text className="text-center">
                  Reservas sob consulta{' '}
                  <strong>
                    serão analisadas pelo hotel e podem ser aprovadas ou
                    recusadas
                  </strong>
                  .
                </Text>
              </DialogHeader>
              <Alert variant="warning" className="mt-6 w-fit mx-auto">
                Prazo de resposta: até 72h
              </Alert>
            </div>
            <button className="w-full bg-primary-200 h-[90px] text-white text-base font-bold rounded-b-[20px]">
              Acompanhar Solicitação
            </button>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};
