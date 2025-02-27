import {
  useBreakpoint,
  useBreakpointBetween,
  useBreakpointOnly,
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useMediaQuery,
} from './useMediaQuery';

export const useBreakpoints = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  const isAboveMd = useBreakpoint('md', 'up');
  const isBelowLg = useBreakpoint('lg', 'down');
  const isBetweenMdAndLg = useBreakpointBetween('md', 'lg');
  const isOnlyXl = useBreakpointOnly('xl');

  const isLandscape = useMediaQuery('(orientation: landscape)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isAboveMd,
    isBelowLg,
    isBetweenMdAndLg,
    isOnlyXl,
    isLandscape,
  };
};
