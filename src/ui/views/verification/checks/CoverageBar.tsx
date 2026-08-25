import { Progress } from '@/components/ui/progress';
import type { JSX } from 'react';
import type { Coverage } from '../../../../verification/objects/checkResult.ts';

export interface CoverageBarProps {
  fraction: Coverage['fraction'];
  /** The same figure in words, already formatted. A bar on its own is length and colour only. */
  label: string;
}

export const CoverageBar = ({ fraction, label }: CoverageBarProps): JSX.Element => {
  return <Progress value={fraction * 100} aria-label={label} />;
};
