import { z } from 'zod';

const cpfCnpj = z
  .string({
    required_error: 'CPF/CNPJ é obrigatório.',
  })
  .refine(doc => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length >= 11;
  }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
  .refine(doc => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length <= 14;
  }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
  .refine(doc => {
    const replacedDoc = doc.replace(/\D/g, '');
    return !!Number(replacedDoc);
  }, 'CPF/CNPJ deve conter apenas números.');

const password = z.string().min(8, { message: 'Senha é obrigatória' });

export const loginValidationSchema = z.strictObject({
  password: password,
  cpfCnpj: cpfCnpj,
});

export const recoveryPasswordSMSValidationSchema = z.strictObject({
  phone: z.string().min(11, { message: 'Telefone é obrigatório' }),
  smsCode: z
    .string()
    .min(6, { message: 'Código de recuperação é obrigatório' }),
});

export const recoveryPasswordEmailValidationSchema = z.strictObject({
  cpfCnpj: cpfCnpj,
  email: z.string().email({ message: 'Email inválido' }),
});

export const newPasswordValidationSchema = z
  .strictObject({
    newPassword: password,
    confirmPassword: password,
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });
