import { type ComponentType, type ReactNode } from 'react';

import { useIsClient } from '@/shared/hooks/use-is-client';

type ResponsiveProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type WithoutFallback<P extends ResponsiveProps> = Omit<P, 'fallback'>;

export const withResponsive = <P extends ResponsiveProps>(
  Component: ComponentType<WithoutFallback<P>>,
) => {
  const WithResponsive = ({ fallback, ...props }: P) => {
    const isClient = useIsClient();
    if (!isClient) return fallback ? <>{fallback}</> : null;
    return <Component {...(props as WithoutFallback<P>)} />;
  };

  WithResponsive.displayName = `withResponsive(${Component.displayName || Component.name || 'Component'})`;

  return WithResponsive;
};
