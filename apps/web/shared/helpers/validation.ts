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

export const loginValidationSchema = z.strictObject({
  password: z.string().min(8, { message: 'Senha é obrigatória' }),
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
