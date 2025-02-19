import { Container, Wrapper } from '@workspace/ui/components';

import { Header } from '@components/Header';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Wrapper className="bg-primary-dark">
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}
