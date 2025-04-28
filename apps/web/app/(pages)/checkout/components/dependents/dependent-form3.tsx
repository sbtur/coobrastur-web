import { useForm } from 'react-hook-form';

import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@coobrastur/ui/components/data-entry/form';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';

export function DependentForm3() {
  const form = useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Title>Cadastra parente de terceiro grau</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>

      <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="parentType"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de parente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="parent">Parente</SelectItem>
                  <SelectItem value="friend">Amigo</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="Nome" {...field} />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
}
