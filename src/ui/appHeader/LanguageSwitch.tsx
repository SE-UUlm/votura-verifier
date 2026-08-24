import { Button } from '@/components/ui/button';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, type SupportedLanguage } from '../utils.ts';

const languageNames: Record<SupportedLanguage, { key: string; fallback: string }> = {
  en: { key: 'english', fallback: 'English' },
  de: { key: 'german', fallback: 'German' },
};

export const LanguageSwitch = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const onSelect = (language: SupportedLanguage): void => {
    void i18n.changeLanguage(language);
  };

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t('changeLanguage', 'Change language')}
    >
      {supportedLanguages.map((language) => {
        const isActive = i18n.resolvedLanguage === language;
        const name = languageNames[language];

        return (
          <Button
            key={language}
            type="button"
            size="sm"
            variant={isActive ? 'secondary' : 'ghost'}
            lang={language}
            aria-pressed={isActive}
            className="h-7 px-2 text-xs"
            onClick={() => {
              onSelect(language);
            }}
          >
            {/* The two letter code reads as an abbreviation, so spell it out for screen readers. */}
            <span aria-hidden="true">{language.toUpperCase()}</span>
            <span className="sr-only">{t(name.key, name.fallback)}</span>
          </Button>
        );
      })}
    </div>
  );
};
