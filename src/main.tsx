import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Unable to mount the application, no element with id "root" was found.');
}

createRoot(rootElement).render(<StrictMode />);
