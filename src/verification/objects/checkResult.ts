import { z } from 'zod/v4';

export const checkKindObject = z.enum(['completeness', 'correctness']);

export type CheckKind = z.infer<typeof checkKindObject>;

/**
 * Completeness is statistical and improves as certificates arrive, correctness is exact and
 * needs no certificates at all. The two read differently on the page, so the difference is
 * carried in the data rather than inferred from the kind.
 */
export const checkNatureObject = z.enum(['statisticalGrows', 'exact']);

export type CheckNature = z.infer<typeof checkNatureObject>;

export const checkStatusObject = z.enum(['passed', 'failed', 'pending']);

export type CheckStatus = z.infer<typeof checkStatusObject>;

/**
 * `fraction` sits next to the two counts on purpose. The verifier computed it, and the page is
 * not allowed to divide, otherwise a rounding choice in the browser could disagree with the
 * number the service actually reasoned about.
 */
export const coverageObject = z.object({
  vouchedBallots: z.int().nonnegative(),
  totalBallots: z.int().positive(),
  fraction: z.number().min(0).max(1),
});

export type Coverage = z.infer<typeof coverageObject>;

/**
 * A check without coverage renders without a figure and without a meter. Nothing here is
 * specific to one kind of check.
 */
export const checkResultObject = z.object({
  kind: checkKindObject,
  nature: checkNatureObject,
  status: checkStatusObject,
  coverage: coverageObject.optional(),
});

export type CheckResult = z.infer<typeof checkResultObject>;
