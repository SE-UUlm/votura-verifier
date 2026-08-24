/**
 * The fraction is taken from the report rather than divided here, so this only decides how many
 * digits to show. One decimal is enough to be honest without implying precision the sample does
 * not carry. English gives 34.7% and German gives 34,7 %.
 */
export const formatPercent = (fraction: number, locale: string): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(fraction);
};
