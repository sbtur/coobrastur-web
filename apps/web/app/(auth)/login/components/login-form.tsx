'use client';

import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { InputPassword } from '../../new-password/components/input-password';
import { loginValidationSchema } from '../../schema/login.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@shared/components/link';
import { cpfOrCnpjMask } from '@shared/utils/input-masks';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';

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
                <MaskedInput
                  mask={cpfOrCnpjMask}
                  placeholder="CPF/CNPJ"
                  {...field}
                  render={(ref, props) => (
                    <Input
                      ref={ref as React.Ref<HTMLInputElement>}
                      {...props}
                    />
                  )}
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
                <InputPassword placeholder="Senha" id="password" {...field} />
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
