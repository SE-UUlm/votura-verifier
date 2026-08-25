import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type {
  CheckKind,
  CheckNature,
  CheckResult,
} from '../../../../verification/objects/checkResult.ts';
import { formatCount } from '../../../format/formatCount.ts';
import { formatPercent } from '../../../format/formatPercent.ts';
import { glyphForCheckStatus } from '../../../glyphs/glyphs.ts';
import { StateGlyph } from '../../../glyphs/StateGlyph.tsx';
import { CoverageBar } from './CoverageBar.tsx';

export interface CheckSectionProps {
  check: CheckResult;
}

const names: Record<CheckKind, { key: string; fallback: string }> = {
  completeness: { key: 'completeness', fallback: 'Completeness' },
  correctness: { key: 'correctness', fallback: 'Correctness' },
};

const natures: Record<CheckNature, { key: string; fallback: string }> = {
  statisticalGrows: { key: 'statisticalGrows', fallback: 'Statistical, grows' },
  exact: { key: 'exactNeedsNoCertificates', fallback: 'Exact, needs no certificates' },
};

/**
 * Renders one check from its data, with no branch anywhere on which check it is. A check without
 * coverage simply comes out without a figure and without a meter, so a report carrying more than
 * one kind needs no change here.
 */
export const CheckSection = ({ check }: CheckSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? 'en';

  const name = names[check.kind];
  const nature = natures[check.nature];
  const { coverage } = check;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <StateGlyph
            shape={glyphForCheckStatus[check.status]}
            variant={check.status === 'passed' ? 'outline' : 'filled'}
          />
          <span>
            {t(name.key, name.fallback)} · {t(nature.key, nature.fallback)}
          </span>
        </CardTitle>
      </CardHeader>
      {coverage !== undefined ? (
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground text-sm">
              {t('ballotsVouchedForByACertificate', 'Ballots vouched for by a certificate')}
            </span>
            {/* The visible figure is symbols, so the bar carries the same numbers in words. */}
            <span className="text-sm tabular-nums" aria-hidden="true">
              {formatCount(coverage.vouchedBallots, locale)} /{' '}
              {formatCount(coverage.totalBallots, locale)} ·{' '}
              {formatPercent(coverage.fraction, locale)}
            </span>
          </div>
          <CoverageBar
            fraction={coverage.fraction}
            label={t(
              'vouchedOfTotalBallotsPercent',
              '{{vouched}} of {{total}} ballots, {{percent}}',
              {
                vouched: formatCount(coverage.vouchedBallots, locale),
                total: formatCount(coverage.totalBallots, locale),
                percent: formatPercent(coverage.fraction, locale),
              },
            )}
          />
        </CardContent>
      ) : null}
    </Card>
  );
};
