import { Container, Text, Title } from '@workspace/ui/components';

import { Image, Link } from '@components';

import { NAVIGATIONS } from './helpers';

export const Footer = () => {
  return (
    <Container
      as="footer"
      size="full"
      className="pt-20 pb-5 bg-[linear-gradient(14deg,#F4FAFE_10.1%,#FFF_90.4%)]"
    >
      <Container
        as="section"
        responsive
        className="grid grid-cols-4 gap-10 pl-28"
      >
        {NAVIGATIONS.map(navigation => (
          <div className="flex flex-col gap-3" key={navigation.title}>
            <Title as="h2" size="xs">
              {navigation.title}
            </Title>
            {navigation.items.map(item => (
              <Link href={item.href} variant="neutral" key={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>
      <Container as="section" className="flex flex-col items-center gap-4 mt-6">
        <div>
          <div className="flex gap-2">
            <Link href="/">
              <Image
                src="/images/icons/facebook.svg"
                width={24}
                height={24}
                alt="Facebook"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/icons/instagram.svg"
                width={24}
                height={24}
                alt="Instagram"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Linkedin"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/icons/youtube.svg"
                width={24}
                height={24}
                alt="Youtube"
              />
            </Link>
          </div>
        </div>
        <Text size="sm">
          Grupo Coobrastur©2024 | Todos os direitos reservados.
        </Text>
      </Container>
    </Container>
  );
};
