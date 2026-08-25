import { z } from 'zod/v4';
import { checkResultObject } from './checkResult.ts';
import { electionSummaryObject } from './electionSummary.ts';
import { verdictObject } from './verdict.ts';

/**
 * One finished run of the checks against one published election. Every figure in here was
 * computed by the verifier, the page only formats them.
 */
export const verificationReportObject = z.object({
  id: z.string().min(1),
  election: electionSummaryObject,
  verdict: verdictObject,
  checks: z.array(checkResultObject).min(1),
  updatedAt: z.iso.datetime(),
});

export type VerificationReport = z.infer<typeof verificationReportObject>;
