import { formatUtcDate } from './formatUtcDate.ts';

const pad = (value: number): string => value.toString().padStart(2, '0');

/** See {@link formatUtcDate} for why this does not follow the active language. */
export const formatUtcDateTime = (isoTimestamp: string): string => {
  const date = new Date(isoTimestamp);
  const time = `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;

  return `${formatUtcDate(isoTimestamp)} ${time} UTC`;
};
