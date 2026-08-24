import { cn } from '@/lib/utils';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { StateGlyph, type StateGlyphProps } from '../../glyphs/StateGlyph.tsx';

export interface VerdictIndicatorSegmentProps {
  shape: StateGlyphProps['shape'];
  label: string;
  isActive: boolean;
}

export const VerdictIndicatorSegment = ({
  shape,
  label,
  isActive,
}: VerdictIndicatorSegmentProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs',
        isActive
          ? 'border-primary bg-secondary text-foreground font-semibold'
          : 'text-muted-foreground',
      )}
      // `exactOptionalPropertyTypes` will not take an explicit undefined here.
      // eslint-disable-next-line @typescript-eslint/naming-convention
      {...(isActive ? { 'aria-current': 'step' as const } : {})}
    >
      <StateGlyph shape={shape} variant={isActive ? 'filled' : 'outline'} />
      <span>{label}</span>
      {isActive ? <span className="sr-only">{t('currentState', 'Current state')}</span> : null}
    </li>
  );
};
