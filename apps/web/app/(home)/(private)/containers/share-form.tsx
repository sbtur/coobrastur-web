'use client';

import { useForm } from 'react-hook-form';

import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';
import { Textarea } from '@coobrastur/ui/components/data-entry/textarea';

import { Container } from '@ui/components/layouts/container';

type FormValues = {
  messageType: string;
  message: string;
};

export function ShareForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      messageType: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Container className="w-full py-4 px-10 mt-20 mb-20" as="section">
      <div className="w-full flex flex-col md:flex-row gap-1 px-10 max-w-[800px] mx-auto">
        <div className="w-full md:w-1/2">
          <Badge variant="default" className="mb-5">
            DEPOIMENTO
          </Badge>
          <Title size="lg" className="text-primary-300">
            Compartilhe sua experiência
          </Title>
          <Text size="sm" className="text-neutral-500">
            Envie seu depoimento sobre a nossa Assinatura de Hotéis para que
            outros assinantes e futuros assinantes possam ver! 
          </Text>
        </div>
        <div className="w-full md:w-1/2">
          <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="messageType"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Tipo de mensagem" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="positive">Positivo</SelectItem>
                      <SelectItem value="negative">Negativo</SelectItem>
                      <SelectItem value="neutral">Neutro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="text-xs font-medium">
                    Conte sua história para gente
                  </FormLabel>
                  <Textarea placeholder="Mensagem" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Enviar depoimento
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
