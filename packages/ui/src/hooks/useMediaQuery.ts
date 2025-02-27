import { useEffect, useState } from 'react';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

type Breakpoint = keyof typeof breakpoints;

const mediaQueries = {
  up: (size: Breakpoint) => `(min-width: ${breakpoints[size]})`,
  down: (size: Breakpoint) => `(max-width: ${breakpoints[size]})`,
  between: (min: Breakpoint, max: Breakpoint) =>
    `(min-width: ${breakpoints[min]}) and (max-width: ${breakpoints[max]})`,
  only: (size: Breakpoint) => {
    const keys = Object.keys(breakpoints) as Breakpoint[];
    const index = keys.indexOf(size);
    const nextSize = keys[index + 1];
    return nextSize
      ? `(min-width: ${breakpoints[size]}) and (max-width: ${breakpoints[nextSize]})`
      : mediaQueries.up(size);
  },
} as const;

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return mounted ? matches : false;
};

export const useBreakpoint = (
  breakpoint: Breakpoint,
  direction: 'up' | 'down' = 'up',
) => {
  return useMediaQuery(mediaQueries[direction](breakpoint));
};

export const useBreakpointBetween = (min: Breakpoint, max: Breakpoint) => {
  return useMediaQuery(mediaQueries.between(min, max));
};

export const useBreakpointOnly = (breakpoint: Breakpoint) => {
  return useMediaQuery(mediaQueries.only(breakpoint));
};

export const useIsMobile = () => useMediaQuery(mediaQueries.down('md'));
export const useIsTablet = () =>
  useMediaQuery(mediaQueries.between('md', 'lg'));
export const useIsDesktop = () => useMediaQuery(mediaQueries.up('lg'));

export type { Breakpoint };
export { breakpoints, mediaQueries };
