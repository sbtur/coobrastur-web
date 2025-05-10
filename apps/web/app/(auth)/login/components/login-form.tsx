'use client';

import { Loader2 } from 'lucide-react';
import { withMask } from 'use-mask-input';

import {
  Alert,
  AlertDescription,
} from '@coobrastur/ui/components/data-display/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@coobrastur/ui/components/data-entry/form';

import { useLogin } from '../useLogin';

import { Link } from '@shared/components/link';
import { Button } from '@ui/components/data-entry/button';
import { Input } from '@ui/components/data-entry/input';
import { InputPassword } from '@ui/components/data-entry/input/input-password';

const LoginForm = () => {
  const { form, isPending, formAction, feedbackMessage } = useLogin();

  return (
    <Form form={form} onSubmit={form.handleSubmit(formAction)} className="mt-8">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="username"
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
        <Button type="submit" className="w-full" disabled={isPending}>
          Acessar minha conta
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>

        <Button className="w-full" variant="outline" asChild>
          <Link href="/new-account">Primeiro acesso</Link>
        </Button>
      </div>

      {feedbackMessage && (
        <Alert variant="danger" className="mt-4">
          <AlertDescription>{feedbackMessage}</AlertDescription>
        </Alert>
      )}
    </Form>
  );
};

export default LoginForm;
