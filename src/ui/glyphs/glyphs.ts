import type { CheckStatus } from '../../verification/objects/checkResult.ts';
import type { VerdictState } from '../../verification/objects/verdict.ts';
import type { GlyphShape } from './StateGlyph.tsx';

/**
 * The shape climbs with the strength of the claim: a triangle warns, a diamond is provisional,
 * a square is settled. Issue #8 asks that a state never be signalled by colour alone, and this
 * is the part of that promise which survives a black and white printout.
 */
export const glyphForVerdictState: Record<VerdictState, GlyphShape> = {
  contradicted: 'triangle',
  consistentLimitedCoverage: 'diamond',
  consistentBroadCoverage: 'square',
};

export const glyphForCheckStatus: Record<CheckStatus, GlyphShape> = {
  failed: 'triangle',
  pending: 'diamond',
  passed: 'square',
};
