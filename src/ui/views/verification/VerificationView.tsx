import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetVerificationReport } from '../../../swr/verificationReports/useGetVerificationReport.ts';
import type { parameter } from '../../../verification/parameters.ts';
import { VerdictIndicator } from './VerdictIndicator.tsx';
import { VerdictPanel } from './VerdictPanel.tsx';
import { VerificationHeadline } from './VerificationHeadline.tsx';

export interface VerificationViewRouteParams extends Record<string, string> {
  [parameter.verificationReportId]: string;
}

export const VerificationView = (): JSX.Element => {
  const { t } = useTranslation();
  const params = useParams<VerificationViewRouteParams>();
  const { data, isLoading, error } = useGetVerificationReport(params.verificationReportId);

  // The failure is reported before the loading state, otherwise a report that cannot be read
  // would sit on "loading" forever. It is also reported in the document rather than as a toast:
  // published data that does not parse is a finding about the election, not a passing notice.
  if (error !== undefined) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <p className="max-w-prose text-sm" role="alert">
          {t(
            'theVerificationReportCouldNotBeRead',
            'The verification report could not be read. The published data did not match the format this service expects.',
          )}
        </p>
      </div>
    );
  }

  if (isLoading || data === undefined) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <p className="text-muted-foreground text-sm">
          {t('loadingTheVerificationReport', 'Loading the verification report')}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-6 py-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-6">
        <VerificationHeadline election={data.election} updatedAt={data.updatedAt} />
        <VerdictIndicator state={data.verdict.state} />
        <VerdictPanel verdict={data.verdict} />
      </div>
      <aside />
    </div>
  );
};
