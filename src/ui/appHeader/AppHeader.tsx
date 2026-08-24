import { Separator } from '@/components/ui/separator';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { serviceOperator } from '../utils.ts';
import { LanguageSwitch } from './LanguageSwitch.tsx';

export const AppHeader = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* The product name is a name, so it stays out of the translation resources. */}
        <p className="text-sm font-semibold tracking-tight">votura-verifier</p>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-xs">
            {t('operatedByOperator', 'Operated by {{operator}}', { operator: serviceOperator })}
          </span>
          <Separator orientation="vertical" className="h-4" />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
};
