import MediaQuery, {
  MediaQueryAllQueryable,
  useMediaQuery as useMediaQueryReact,
} from 'react-responsive';

import { BREAKPOINTS } from '../helpers/breakpoints';

type MediaQuerySettings = Partial<
  MediaQueryAllQueryable & {
    query?: string;
  }
>;

export interface MediaQueryResponse {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
  isXLargeScreen: boolean;
  is2XLargeScreen: boolean;
}

export const useMediaQuery = (): MediaQueryResponse => {
  const isSmallScreen = useMediaQueryReact({ maxWidth: BREAKPOINTS.md - 1 });
  const isMediumScreen = useMediaQueryReact({
    minWidth: BREAKPOINTS.md,
    maxWidth: BREAKPOINTS.lg - 1,
  });
  const isLargeScreen = useMediaQueryReact({ minWidth: BREAKPOINTS.lg });
  const isXLargeScreen = useMediaQueryReact({ minWidth: BREAKPOINTS.xl });
  const is2XLargeScreen = useMediaQueryReact({
    minWidth: BREAKPOINTS['2xl'],
  });

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isXLargeScreen,
    is2XLargeScreen,
  };
};

export const useCustomMediaQuery = (query: MediaQuerySettings): boolean => {
  return useMediaQueryReact(query);
};

export { MediaQuery };
