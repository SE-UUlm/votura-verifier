import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { VerdictState } from '../../../verification/objects/verdict.ts';
import { glyphForVerdictState } from '../../glyphs/glyphs.ts';
import { VerdictIndicatorSegment } from './VerdictIndicatorSegment.tsx';

export interface VerdictIndicatorProps {
  state: VerdictState;
}

interface SegmentDescriptor {
  state: VerdictState;
  labelKey: string;
  labelFallback: string;
}

/**
 * The scale and its order belong to the verifier, not to any one election, so they live here
 * rather than in the report. The report only says which step currently holds.
 */
const segments: readonly SegmentDescriptor[] = [
  { state: 'contradicted', labelKey: 'contradicted', labelFallback: 'Contradicted' },
  {
    state: 'consistentLimitedCoverage',
    labelKey: 'consistentLimitedCoverage',
    labelFallback: 'Consistent · limited coverage',
  },
  {
    state: 'consistentBroadCoverage',
    labelKey: 'consistentBroadCoverage',
    labelFallback: 'Consistent · broad coverage',
  },
];

export const VerdictIndicator = ({ state }: VerdictIndicatorProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ol
      className="grid gap-2 sm:grid-cols-3"
      aria-label={t('verificationState', 'Verification state')}
    >
      {segments.map((segment) => (
        <VerdictIndicatorSegment
          key={segment.state}
          shape={glyphForVerdictState[segment.state]}
          label={t(segment.labelKey, segment.labelFallback)}
          isActive={segment.state === state}
        />
      ))}
    </ol>
  );
};
