import type { JSX } from 'react';

export type GlyphShape = 'triangle' | 'diamond' | 'square';

export interface StateGlyphProps {
  shape: GlyphShape;
  variant: 'filled' | 'outline';
  /**
   * Leave unset where a visible label sits next to the glyph. The glyph is then decorative and
   * announcing it again would only repeat the label.
   */
  title?: string;
  size?: number;
}

const paths: Record<GlyphShape, string> = {
  triangle: 'M8 1.5 L15 14 L1 14 Z',
  diamond: 'M8 1 L15 8 L8 15 L1 8 Z',
  square: 'M2 2 H14 V14 H2 Z',
};

/**
 * Hand drawn rather than taken from the icon set, because issue #8 rules out shield, lock and
 * seal imagery. These three shapes exist to separate the states without relying on colour,
 * which means they have to survive a black and white printout.
 */
export const StateGlyph = ({ shape, variant, title, size = 12 }: StateGlyphProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={variant === 'filled' ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      // eslint-disable-next-line @typescript-eslint/naming-convention
      {...(title === undefined ? { 'aria-hidden': true } : { role: 'img', 'aria-label': title })}
    >
      <path d={paths[shape]} />
    </svg>
  );
};
