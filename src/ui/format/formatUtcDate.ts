const pad = (value: number): string => value.toString().padStart(2, '0');

/**
 * Dates stay ISO ordered and in UTC rather than following the active language. A verification
 * record is evidence, and it has to read identically to everyone comparing notes on it.
 */
export const formatUtcDate = (isoTimestamp: string): string => {
  const date = new Date(isoTimestamp);

  return `${date.getUTCFullYear().toString()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
};
