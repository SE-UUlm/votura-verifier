import type { JSX } from 'react';
import { useParams } from 'react-router';
import type { parameter } from '../../../verification/parameters.ts';

export interface VerificationViewRouteParams extends Record<string, string> {
  [parameter.verificationReportId]: string;
}

export const VerificationView = (): JSX.Element => {
  const params = useParams<VerificationViewRouteParams>();

  return <output>{params.verificationReportId}</output>;
};
