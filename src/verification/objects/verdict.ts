import { z } from 'zod/v4';

/**
 * The three states a run of the checks can end in. The order is a property of the verifier, not
 * of an election, so the report only says which one currently holds.
 */
export const verdictStateObject = z.enum([
  'contradicted',
  'consistentLimitedCoverage',
  'consistentBroadCoverage',
]);

export type VerdictState = z.infer<typeof verdictStateObject>;

export const verdictObject = z.object({
  state: verdictStateObject,
  coverageFraction: z.number().min(0).max(1),
});

export type Verdict = z.infer<typeof verdictObject>;
