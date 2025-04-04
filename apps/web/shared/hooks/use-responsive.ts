import { useEffect, useState } from 'react';

import { type BreakpointKey, BREAKPOINTS } from '@/shared/helpers/breakpoints';

type MediaQueryProps = {
  matches: boolean;
};

interface UseResponsiveReturn {
  breakpoints: Record<BreakpointKey, boolean>;
  largerThan: (breakpoint: BreakpointKey) => boolean;
  smallerThan: (breakpoint: BreakpointKey) => boolean;
  between: (start: BreakpointKey, end: BreakpointKey) => boolean;
  only: (breakpoint: BreakpointKey) => boolean;
}

function useMediaQuery(query: string): MediaQueryProps {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const updateMatches = () => setMatches(media.matches);
    media.addEventListener('change', updateMatches);

    return () => media.removeEventListener('change', updateMatches);
  }, [query]);

  return { matches };
}

export function useResponsive(): UseResponsiveReturn {
  const smQuery = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);
  const mdQuery = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
  const lgQuery = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
  const xlQuery = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);
  const xxlQuery = useMediaQuery(`(min-width: ${BREAKPOINTS['2xl']}px)`);

  const breakpoints: Record<BreakpointKey, boolean> = {
    sm: smQuery.matches,
    md: mdQuery.matches,
    lg: lgQuery.matches,
    xl: xlQuery.matches,
    '2xl': xxlQuery.matches,
  };

  const breakpointOrder = Object.keys(BREAKPOINTS) as BreakpointKey[];

  const largerThan = (breakpoint: BreakpointKey): boolean => {
    return breakpoints[breakpoint];
  };

  const smallerThan = (breakpoint: BreakpointKey): boolean => {
    const nextBreakpoint =
      breakpointOrder[breakpointOrder.indexOf(breakpoint) + 1];
    return nextBreakpoint ? !breakpoints[nextBreakpoint] : true;
  };

  const between = (start: BreakpointKey, end: BreakpointKey): boolean => {
    const startIndex = breakpointOrder.indexOf(start);
    const endIndex = breakpointOrder.indexOf(end);

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
      return false;
    }

    const isAboveStart = breakpoints[start];
    const isBelowEnd = !breakpointOrder
      .slice(endIndex + 1)
      .some(bp => breakpoints[bp]);

    return isAboveStart && isBelowEnd;
  };

  const only = (breakpoint: BreakpointKey): boolean => {
    const index = breakpointOrder.indexOf(breakpoint);
    const nextBreakpoint = breakpointOrder[index + 1];

    return (
      breakpoints[breakpoint] &&
      (nextBreakpoint ? !breakpoints[nextBreakpoint] : true)
    );
  };

  return {
    breakpoints,
    largerThan,
    smallerThan,
    between,
    only,
  };
}
