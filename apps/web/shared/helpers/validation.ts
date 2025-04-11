import { z } from 'zod';

export const isValidCPF = (cpf: string) => {
  if (typeof cpf !== 'string') return false;
  const cleanedCpf = cpf.replace(/[^\d]+/g, '');
  if (cleanedCpf.length !== 11 || !!cleanedCpf.match(/(\d)\1{10}/))
    return false;
  const cpfNumbers = cleanedCpf.split('').map(el => Number(el));
  const rest = (count: number) =>
    ((cpfNumbers
      .slice(0, count - 12)
      .reduce(
        (soma: number, el: number, index: number) =>
          soma + el * (count - index),
        0,
      ) *
      10) %
      11) %
    10;
  return rest(10) === cpfNumbers[9] && rest(11) === cpfNumbers[10];
};

export const isValidCNPJ = (cnpj: string) => {
  if (typeof cnpj !== 'string') return false;
  const cleanedCnpj = cnpj.replace(/[^\d]+/g, '');
  if (cleanedCnpj.length !== 14 || !!cleanedCnpj.match(/(\d)\1{13}/))
    return false;
  const cnpjNumbers = cleanedCnpj.split('').map(el => Number(el));
  const rest = (count: number) =>
    ((cnpjNumbers
      .slice(0, count - 12)
      .reduce(
        (soma: number, el: number, index: number) =>
          soma + el * (count - index),
        0,
      ) *
      10) %
      11) %
    10;
  return rest(12) === cnpjNumbers[12] && rest(13) === cnpjNumbers[13];
};
const cpfCnpj = z
  .string({
    required_error: 'CPF/CNPJ é obrigatório.',
  })
  .refine(doc => {
    const replacedDoc = doc.replace(/\D/g, '');
    if (replacedDoc.length === 11) {
      return isValidCPF(replacedDoc);
    }
    if (replacedDoc.length === 14) {
      return isValidCNPJ(replacedDoc);
    }
    return false;
  }, 'CPF/CNPJ inválido');

const password = z
  .string()
  .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' });

export const loginValidationSchema = z.object({
  cpfCnpj: cpfCnpj,
  password: z.string().min(1, { message: 'Senha é obrigatória' }),
});

export const recoveryPasswordSMSValidationSchema = z.strictObject({
  phone: z.string().min(11, { message: 'Telefone é obrigatório' }),
  smsCode: z
    .string()
    .min(6, { message: 'Código de recuperação é obrigatório' }),
});

export const recoveryPasswordEmailValidationSchema = z.object({
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
