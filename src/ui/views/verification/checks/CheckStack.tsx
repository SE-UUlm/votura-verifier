import type { JSX } from 'react';
import type { VerificationReport } from '../../../../verification/objects/verificationReport.ts';
import { CheckSection } from './CheckSection.tsx';

export interface CheckStackProps {
  checks: VerificationReport['checks'];
}

export const CheckStack = ({ checks }: CheckStackProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      {checks.map((check) => (
        <CheckSection key={check.kind} check={check} />
      ))}
    </div>
  );
};
