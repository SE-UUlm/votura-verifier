/**
 * Counts do follow the active language, because a thousands separator is a reading aid rather
 * than part of the record. English gives 1,842 and German gives 1.842.
 */
export const formatCount = (value: number, locale: string): string => {
  return new Intl.NumberFormat(locale).format(value);
};
