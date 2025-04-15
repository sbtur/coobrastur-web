export const formatTextToCapitalizeCase = (text: string): string => {
  if (!text?.trim()) return '';

  return text
    .toLowerCase()
    .replace(/(^|\s+)[\wÀ-ÿ]/g, letter => letter.toUpperCase());
};
