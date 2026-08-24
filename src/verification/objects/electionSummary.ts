import { z } from 'zod/v4';

/** What the verifier needs to name the election it is reporting on, and nothing more. */
export const electionSummaryObject = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  urnPublishedAt: z.iso.datetime(),
  ballotCount: z.int().nonnegative(),
});

export type ElectionSummary = z.infer<typeof electionSummaryObject>;
