export const isCPFValid = (cpf: string) => {
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

export const isCNPJValid = (cnpj: string) => {
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
