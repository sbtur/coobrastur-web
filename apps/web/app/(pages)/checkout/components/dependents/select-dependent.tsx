import { useForm } from 'react-hook-form';

import { Title } from '@coobrastur/ui/components/data-display/title';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@coobrastur/ui/components/data-entry/form';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';

import { Container } from '../container';

interface SelectDependentProps {
  firstName?: string;
  lastName?: string;
  handleSubmit: (data: {
    dependent: string;
    firstName: string;
    lastName: string;
  }) => void;
}

export function SelectDependent({
  firstName = '',
  lastName = '',
  handleSubmit,
}: SelectDependentProps) {
  const form = useForm({
    defaultValues: {
      dependent: 'main',
      firstName,
      lastName,
    },
  });

  const onValueChange = (value: string) => {
    form.setValue('dependent', value);
    form.handleSubmit(handleSubmit)();
  };

  return (
    <Container>
      <Title> Para quem é esta reserva ?</Title>

      <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="dependent"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={onValueChange}
                defaultValue={field.value}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="main" id="main" />
                  <FormLabel
                    htmlFor="main"
                    className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center ${
                      field.value === 'main' ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    Eu sou o hóspede principal.
                  </FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <FormLabel
                    htmlFor="other"
                    className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center ${
                      field.value === 'other' ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    Estou reservando para outra pessoa.
                  </FormLabel>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />

        <div className="flex gap-4 max-w-2xl">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm">Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm">Sobrenome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Form>
    </Container>
  );
}
