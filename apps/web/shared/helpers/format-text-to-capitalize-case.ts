export const formatTextToCapitalizeCase = (text: string) => {
  return text.replace(/\b[A-Z]{2,}\b/g, match => {
    return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
  });
};
