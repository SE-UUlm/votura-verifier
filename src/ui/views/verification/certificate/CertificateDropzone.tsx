import { Button } from '@/components/ui/button';
import { useId, type JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Inert on purpose. `docs/format.md` does not define what a certificate is yet, so there is
 * nothing to parse and nothing to check it against. The control keeps its place but is plainly
 * out of service, because a button that quietly does nothing would be the sort of unverifiable
 * claim this service exists to catch.
 */
export const CertificateDropzone = (): JSX.Element => {
  const { t } = useTranslation();
  const noteId = useId();

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed p-6 text-center">
      <p className="text-sm">
        {t('dropYourCertificateFileHere', 'Drop your certificate file here')}
      </p>
      <Button type="button" size="sm" disabled aria-describedby={noteId}>
        {t('chooseFileToUpload', 'Choose file to upload')}
      </Button>
      <p id={noteId} className="text-muted-foreground max-w-[34ch] text-xs">
        {t(
          'certificateIntakeIsNotAvailableYet',
          'Certificate intake is not available yet, the input format is still being defined.',
        )}
      </p>
    </div>
  );
};
