import type { JSX } from 'react';
import { Outlet } from 'react-router';
import { AppHeader } from './appHeader/AppHeader.tsx';

export const AppLayout = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
};
