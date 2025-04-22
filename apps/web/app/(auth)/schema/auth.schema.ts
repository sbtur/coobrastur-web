import { z } from 'zod';

import { isCNPJValid, isCPFValid } from './validation-helpers';

const documentSchema = z
  .string({
    required_error: 'CPF/CNPJ é obrigatório.',
  })
  .refine(doc => {
    const replacedDoc = doc.replace(/\D/g, '');
    if (replacedDoc.length === 11) {
      return isCPFValid(replacedDoc);
    }
    if (replacedDoc.length === 14) {
      return isCNPJValid(replacedDoc);
    }
    return false;
  }, 'CPF/CNPJ inválido');

const password = z
  .string()
  .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' });

export const recoveryPasswordSMSValidationSchema = z.strictObject({
  phone: z.string().min(11, { message: 'Telefone é obrigatório' }),
  smsCode: z
    .string()
    .min(6, { message: 'Código de recuperação é obrigatório' }),
});

export const recoveryPasswordEmailValidationSchema = z.object({
  document: documentSchema,
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

export const loginValidationSchema = z.object({
  document: documentSchema,
  password: z.string().min(1, { message: 'Senha é obrigatória' }),
});
