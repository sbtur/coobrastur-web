import {
  MediaQuery as MediaQueryReact,
  useCustomMediaQuery,
  useMediaQuery,
} from '@hooks/useMediaQuery';

export const Desktop = ({ children }: { children: React.ReactNode }) => {
  const { isLargeScreen } = useMediaQuery();
  return isLargeScreen ? children : null;
};
export const Tablet = ({ children }: { children: React.ReactNode }) => {
  const { isMediumScreen } = useMediaQuery();
  return isMediumScreen ? children : null;
};
export const Mobile = ({ children }: { children: React.ReactNode }) => {
  const { isSmallScreen } = useMediaQuery();
  return isSmallScreen ? children : null;
};

export const XLarge = ({ children }: { children: React.ReactNode }) => {
  const { isXLargeScreen } = useMediaQuery();
  return isXLargeScreen ? children : null;
};
export const Portrait = ({ children }: { children: React.ReactNode }) => {
  const isPortrait = useCustomMediaQuery({ orientation: 'portrait' });
  return isPortrait ? children : null;
};

export const Landscape = ({ children }: { children: React.ReactNode }) => {
  const isLandscape = useCustomMediaQuery({ orientation: 'landscape' });
  return isLandscape ? children : null;
};

export const MediaQuery = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return <MediaQueryReact {...props}>{children}</MediaQueryReact>;
};
