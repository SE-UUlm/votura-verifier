import type { ZodType } from 'zod/v4';
import { getter } from './getter.ts';

export type GetterFactory = <T>(
  schema: ZodType<T>,
) => (url: Parameters<typeof getter>[0]) => Promise<T>;

/**
 * Every response is parsed before it reaches a component. Published data that does not match the
 * expected shape is itself a finding, so it has to fail loudly rather than render half a page.
 */
export const getterFactory: GetterFactory = (schema) => {
  return async (url) => {
    const response = await getter(url);
    const parsed = await schema.safeParseAsync(response);

    if (!parsed.success) {
      throw new TypeError('Parsing of the response failed.');
    }

    return parsed.data;
  };
};
