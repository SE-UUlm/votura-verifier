import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Opens the place where the arithmetic behind the checks will be explained. The body is empty
 * for now, because nothing is computed in the browser yet and there is no algorithm to unfold.
 */
export const ArithmeticDialog = (): JSX.Element => {
  const { t } = useTranslation();
  const title = t('showTheArithmetic', 'Show the arithmetic');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="link" size="sm" className="text-muted-foreground">
          {title}
        </Button>
      </DialogTrigger>
      {/* No description yet, so the dialog is told not to look for one. */}
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-40" />
      </DialogContent>
    </Dialog>
  );
};
