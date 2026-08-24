import type { JSX } from 'react';
import { ArithmeticDialog } from './ArithmeticDialog.tsx';

export const AppFooter = (): JSX.Element => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl justify-end px-6 py-3">
        <ArithmeticDialog />
      </div>
    </footer>
  );
};
