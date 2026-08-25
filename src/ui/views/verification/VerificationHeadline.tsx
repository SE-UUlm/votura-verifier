import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import type { ElectionSummary } from '../../../verification/objects/electionSummary.ts';
import type { VerificationReport } from '../../../verification/objects/verificationReport.ts';
import { formatCount } from '../../format/formatCount.ts';
import { formatUtcDate } from '../../format/formatUtcDate.ts';
import { formatUtcDateTime } from '../../format/formatUtcDateTime.ts';
import { Eyebrow } from '../../text/Eyebrow.tsx';

export interface VerificationHeadlineProps {
  election: ElectionSummary;
  updatedAt: VerificationReport['updatedAt'];
}

export const VerificationHeadline = ({
  election,
  updatedAt,
}: VerificationHeadlineProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? 'en';

  const meta = [
    t('urnPublishedDate', 'Urn published {{date}}', {
      date: formatUtcDate(election.urnPublishedAt),
    }),
    t('totalBallots', '{{total}} ballots', { total: formatCount(election.ballotCount, locale) }),
    t('updatedDateTime', 'updated {{dateTime}}', { dateTime: formatUtcDateTime(updatedAt) }),
  ].join(' · ');

  return (
    <div className="flex flex-col gap-2">
      <Eyebrow>
        {t(
          'independentVerificationOfAVoturaElection',
          'Independent verification of a votura election',
        )}
      </Eyebrow>
      <h1 className="text-3xl font-semibold tracking-tight text-balance">{election.name}</h1>
      <p className="text-muted-foreground text-sm">{meta}</p>
    </div>
  );
};
