import type { JSX, ReactNode } from 'react';

export interface EyebrowProps {
  children: ReactNode;
  /** Set when the label introduces a section that already has a heading below it. */
  component?: 'p' | 'h2';
}

export const Eyebrow = ({ children, component = 'p' }: EyebrowProps): JSX.Element => {
  const Component = component;

  return (
    <Component className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
      {children}
    </Component>
  );
};
