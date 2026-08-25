import { Card, CardContent } from '@/components/ui/card';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { Verdict, VerdictState } from '../../../verification/objects/verdict.ts';
import { formatPercent } from '../../format/formatPercent.ts';

export interface VerdictPanelProps {
  verdict: Verdict;
}

/**
 * The prose lives in the translation resources rather than in the report. If the verifier
 * shipped a rendered English sentence, the German page would only be half translated.
 */
const prose: Record<VerdictState, { key: string; fallback: string }> = {
  contradicted: {
    key: 'verdictContradicted',
    fallback:
      'At least one certificate does not match the published election data. Until that is explained, the announced result does not follow from a complete and unmodified ballot box.',
  },
  consistentLimitedCoverage: {
    key: 'verdictConsistentLimitedCoverage',
    fallback:
      'So far the published result is consistent with every certificate received. Only {{coverage}} of ballots are vouched for, which is too little to conclude much yet. The check strengthens with each certificate collected.',
  },
  consistentBroadCoverage: {
    key: 'verdictConsistentBroadCoverage',
    fallback:
      'As of now, the published result is consistent with every certificate received, the exact recount matches and every certificate agrees with the published data. Only {{coverage}} of ballots are vouched for so far, so this is early confidence, not proof; it strengthens with each certificate collected.',
  },
};

export const VerdictPanel = ({ verdict }: VerdictPanelProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? 'en';
  const text = prose[verdict.state];

  return (
    <Card className="py-5">
      <CardContent>
        <p className="text-sm leading-relaxed">
          {t(text.key, text.fallback, {
            coverage: formatPercent(verdict.coverageFraction, locale),
          })}
        </p>
      </CardContent>
    </Card>
  );
};
