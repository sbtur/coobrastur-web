import { useForm } from 'react-hook-form';

import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@coobrastur/ui/components/data-entry/form';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@coobrastur/ui/components/data-entry/select';

export function ImmediateFamilyForm() {
  const form = useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Title className="mb-2">Cadastra parente de primeiro grau</Title>
      <Text className="mb-6">
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
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Parentesco" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="parent">Conjuge</SelectItem>
                  <SelectItem value="friend">Filho</SelectItem>
                  <SelectItem value="friend">Pai</SelectItem>
                  <SelectItem value="friend">Mãe</SelectItem>
                  <SelectItem value="friend">Tio</SelectItem>
                  <SelectItem value="friend">Tia</SelectItem>
                  <SelectItem value="friend">Avô</SelectItem>
                  <SelectItem value="friend">Avó</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <Input placeholder="Nome" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento</FormLabel>
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="day"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="DD"
                      {...field}
                      className="w-[80px]"
                      min={1}
                      max={31}
                      maxLength={2}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="month"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="MM"
                      {...field}
                      className="w-[80px]"
                      min={1}
                      max={12}
                      maxLength={2}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="AAAA"
                      {...field}
                      className="w-[120px]"
                      min={1900}
                      max={2024}
                      maxLength={4}
                    />
                  )}
                />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cellphone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular</FormLabel>
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="ddd"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="DDD"
                      {...field}
                      className="w-[80px]"
                      min={11}
                      max={99}
                      maxLength={2}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <Input
                      type="number"
                      placeholder="Número"
                      {...field}
                      className="w-[200px]"
                      maxLength={9}
                    />
                  )}
                />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" {...field} />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 mb-6 w-full">
          Cadastra terceiro
        </Button>

        <Text className="mx-auto w-1/2 text-center text-sm text-gray-500">
          Atenção: Após o cadastro do beneficiário, só será possível alterá-lo{' '}
          <span className="font-bold text-highlight-100">após 12 meses.</span>
        </Text>
      </Form>
    </div>
  );
}
