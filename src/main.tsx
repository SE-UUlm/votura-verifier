import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { SWRConfig } from 'swr';
import { browserRouter } from './browserRouter.ts';
import './i18n';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Unable to mount the application, no element with id "root" was found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <RouterProvider router={browserRouter} />
    </SWRConfig>
  </StrictMode>,
);
