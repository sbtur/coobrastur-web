export const DATE_MASK = [
  /[0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const PHONE_MASK = [
  '(',
  /[0-9]/,
  /[0-9]/,
  ')',
  ' ',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const CELLPHONE_MASK = [
  '(',
  /[0-9]/,
  /[0-9]/,
  ')',
  ' ',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const CPF_MASK = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
];

export const CNPJ_MASK = [
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
];

export const CEP_MASK = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const CREDITCARD_MASK = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  ' ',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  ' ',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  ' ',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const HOUR_MASK = (value: string): (string | RegExp)[] => {
  const chars = value.split('');

  let hours: (string | RegExp)[];
  if (chars[0] === '0' || chars[0] === '1' || chars[0] === '2') {
    if (chars[1] === ':') {
      // only one digit before the colon: "0", "1", "2"
      hours = [/[0-2]/];
    } else {
      // two digits: 00, 01, 02, 03, 04, ..., 18, 19, 20, 21, 22, 23
      hours = [/[0-2]/, chars[0] === '2' ? /[0-3]/ : /[0-9]/];
    }
  } else {
    // one digit greater than two: 3, 4, 5, 6, 7, 8, 9
    hours = [/[3-9]/];
  }

  // minutes is always two-digits
  const minutes = [/[0-5]/, /[0-9]/];

  return [...hours, ':', ...minutes];
};

export const MONTH_YEAR_MASK = [
  /[0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const dateToSend = (date: string): string => {
  const alreadyInverted = date.split('').filter((number: string) => {
    return number === '-';
  });

  if (!alreadyInverted.length) {
    const convertedDate = date
      .split('')
      .filter((number: string) => {
        return number !== '/';
      })
      .reverse();

    if (convertedDate.length < 8) return date;

    const year = convertedDate.slice(0, 4).join('');
    const month = convertedDate.slice(4, 6).join('');
    const day = convertedDate.slice(6, 8).join('');

    return `${year}-${month}-${day}`;
  }

  return date;
};

export const dateToShow = (date: string): string => {
  if (!date) return '';
  return date.split('-').reverse().join('');
};

export const numberOnly = (value: string | number): string => {
  const reg = /\d+/g;
  const parseNumber = String(value).match(reg);

  if (!parseNumber) return '';

  return parseNumber.join('');
};

export const currencyNumberOnly = (value: string | number): string => {
  if (!value) return '';
  const parseNumber = String(value)
    .replace(/[^\d,]/g, '')
    .replace(',', '.');

  return parseNumber;
};

export const formatCurrencyToShowInField = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const numberThousandSeparator = (number: number): string =>
  Number(number).toLocaleString('pt-BR', {
    maximumFractionDigits: 1,
  });

export const numberAndLetters = (value: string): string => {
  const regx = /[^a-zA-Z0-9]/g;
  const parsedValue = String(value).replace(regx, '').split(' ').join('');

  if (!parsedValue) return '';

  return parsedValue;
};

export const cellPhoneOrPhoneMask = (value: string): (string | RegExp)[] => {
  const numbers = numberOnly(value);

  return numbers.length > 10 ? CELLPHONE_MASK : PHONE_MASK;
};

export const validatePhoneNumbers = (value: string): boolean => {
  const numbers = numberOnly(value);
  return numbers.length >= 10;
};

export const cpfOrCnpjMask = (value: string): (string | RegExp)[] => {
  const numbers = numberOnly(value);
  return numbers.length > 11 ? CNPJ_MASK : CPF_MASK;
};
