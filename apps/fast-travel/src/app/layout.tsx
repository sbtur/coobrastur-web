import type { Metadata } from 'next';

import '@coobrastur/ui/globals.css';

export const metadata: Metadata = {
  title: 'Fast Travel Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
