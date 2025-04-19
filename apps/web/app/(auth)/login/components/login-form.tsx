'use client';

import { useForm } from 'react-hook-form';

import { withMask } from 'use-mask-input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { loginValidationSchema } from '../../schema/auth.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@shared/components/link';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { InputPassword } from '@ui/components/data-entry/input/input-password';

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      document: '',
      password: '',
    },
    resolver: zodResolver(loginValidationSchema),
  });

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
      className="mt-8"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu CPF/CNPJ</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="CPF/CNPJ"
                  id="document"
                  ref={withMask(['999.999.999-99', '999.999.999/9999-99'])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <InputPassword {...field} placeholder="Senha" id="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Link
        href="/recovery-password"
        className="text-highlight-100 text-sm underline font-bold block w-fit mt-2 mx-auto lg:mx-0"
      >
        Esqueci minha senha
      </Link>

      <div className="space-y-3 mt-8">
        <Button type="submit" className="w-full">
          Acessar minha conta
        </Button>

        <Button className="w-full" variant="outline" asChild>
          <Link href="/new-account">Primeiro acesso</Link>
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
