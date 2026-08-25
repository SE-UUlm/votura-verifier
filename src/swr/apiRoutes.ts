import type { VerificationReport } from '../verification/objects/verificationReport.ts';

/**
 * The returned path doubles as the SWR cache key, as in votura.
 *
 * Until votura publishes a ballot box and this service can answer for itself, the API is a
 * directory of static documents under `public/api`, which is where the `.json` suffix comes
 * from. Pointing at a real service later is a change to `VITE_API_BASE_URL` and dropping the
 * suffix.
 */
export const apiRoutes = {
  base: import.meta.env.VITE_API_BASE_URL as string,
  verificationReports: {
    byId: (id: VerificationReport['id']): string => `/verificationReports/${id}.json`,
  },
};
