import { createBrowserRouter, redirect } from 'react-router';
import { AppLayout } from './ui/AppLayout.tsx';
import { VerificationView } from './ui/views/verification/VerificationView.tsx';
import { parameter } from './verification/parameters.ts';

/**
 * There is no index of elections yet, and votura publishes nothing to build one from, so the
 * root path leads to the single report this service currently knows about.
 */
const demoVerificationReportId = 'fsrInformatik2026';

export const browserRouter = createBrowserRouter([
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Component: AppLayout,
    children: [
      {
        path: '/',
        loader: (): Response => redirect(`/verifications/${demoVerificationReportId}`),
      },
      {
        path: `/verifications/:${parameter.verificationReportId}`,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Component: VerificationView,
      },
    ],
  },
]);
