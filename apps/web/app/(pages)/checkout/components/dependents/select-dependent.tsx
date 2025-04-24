import { useForm } from 'react-hook-form';

import { Title } from '@coobrastur/ui/components/data-display/title';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '@coobrastur/ui/components/data-entry/form';
import {
  RadioGroup,
  RadioGroupItem,
} from '@coobrastur/ui/components/data-entry/radio-group';

import { Container } from '../container';

export function SelectDependent() {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Title> Para quem é esta reserva ?</Title>

      <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="dependent"
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                onValueChange={field.onChange}
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
      </Form>
    </Container>
  );
}
