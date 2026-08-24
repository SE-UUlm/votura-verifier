import useSWR from 'swr';
import {
  verificationReportObject,
  type VerificationReport,
} from '../../verification/objects/verificationReport.ts';
import { apiRoutes } from '../apiRoutes.ts';
import { getterFactory } from '../getterFactory.ts';
import type { ParametrizedApiHook } from '../types/ApiHook';

export const useGetVerificationReport: ParametrizedApiHook<
  VerificationReport['id'] | undefined,
  VerificationReport
> = (id, options) => {
  const shouldFetch = id !== undefined && options?.skipFetch !== true;

  return useSWR(
    shouldFetch ? apiRoutes.verificationReports.byId(id) : null,
    getterFactory(verificationReportObject),
  );
};
