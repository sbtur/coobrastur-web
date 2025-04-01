import { ReactNode } from 'react';

import { Wrapper } from '@ui/components/layouts/wrapper';

function HomeLayout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default HomeLayout;
