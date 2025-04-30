import { ReactNode } from 'react';

export default function SearchPagePrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex min-h-dvh flex-col">{children}</div>;
}
