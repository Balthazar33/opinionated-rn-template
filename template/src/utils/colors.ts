export enum Colors {
  WHITE = '#ffffff',
  BLACK = '#000000',
  PRIMARY_RED = '#ff0000',
  PRIMARY_BLUE = '#0000ff',
  PRIMARY_GREEN = '#00ff00',
  GREY = '#8a8a8a',
  TRANSPARENT = 'transparent',
}

// Opacity range type implementation----------------------
// Ref: https://stackoverflow.com/a/70307091/14431966
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;
type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
type OpacityRange = Range<0, 100>;
//--------------------------------------------------------

/**
 * Returns a color with the specified opacity
 * @return color with the specified opacity
 */
export const withOpacity = (color: string, opacity: OpacityRange) => {
  return `${color}${opacity}`;
};
