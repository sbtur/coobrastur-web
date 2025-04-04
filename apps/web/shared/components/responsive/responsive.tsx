import { type ReactNode } from 'react';

import { useResponsive } from '@hooks/use-responsive';

import { BreakpointKey } from '@/shared/helpers/breakpoints';

import { withResponsive } from './with-responsive';

type ResponsiveProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type BreakpointProps = ResponsiveProps & {
  breakpoint: BreakpointKey;
};

type BetweenProps = ResponsiveProps & {
  min: BreakpointKey;
  max: BreakpointKey;
};

type WithoutFallback<P extends ResponsiveProps> = Omit<P, 'fallback'>;

const SmallerThan = ({
  children,
  breakpoint,
}: WithoutFallback<BreakpointProps>) => {
  const { breakpoints } = useResponsive();
  return !breakpoints[breakpoint] ? <>{children}</> : null;
};

const LargerThan = ({
  children,
  breakpoint,
}: WithoutFallback<BreakpointProps>) => {
  const { breakpoints } = useResponsive();
  return breakpoints[breakpoint] ? <>{children}</> : null;
};

const Between = ({ children, min, max }: WithoutFallback<BetweenProps>) => {
  const { between } = useResponsive();
  return between(min, max) ? <>{children}</> : null;
};

const Only = ({ children, breakpoint }: WithoutFallback<BreakpointProps>) => {
  const { only } = useResponsive();
  return only(breakpoint) ? <>{children}</> : null;
};

export const ResponsiveSmallerThan =
  withResponsive<BreakpointProps>(SmallerThan);
export const ResponsiveLargerThan = withResponsive<BreakpointProps>(LargerThan);
export const ResponsiveBetween = withResponsive<BetweenProps>(Between);
export const ResponsiveOnly = withResponsive<BreakpointProps>(Only);
