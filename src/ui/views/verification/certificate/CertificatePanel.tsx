import { Card, CardContent } from '@/components/ui/card';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Eyebrow } from '../../../text/Eyebrow.tsx';
import { CertificateDropzone } from './CertificateDropzone.tsx';

export const CertificatePanel = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <Eyebrow>{t('addYourCertificate', 'Add your certificate')}</Eyebrow>
        <h2 className="text-lg font-semibold">
          {t('strengthenThisCheck', 'Strengthen this check')}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t(
            'whenYouVotedYouReceivedACertificate',
            "When you voted, you received a certificate for another voter's ballot, not your own. Upload it to check it against the published election data. Together these certificates test whether the published result is probably correct.",
          )}
        </p>
        <CertificateDropzone />
      </CardContent>
    </Card>
  );
};
