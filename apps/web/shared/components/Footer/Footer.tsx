import { Text } from '@coobrastur/ui/components/DataDisplay/Text';
import { Title } from '@coobrastur/ui/components/DataDisplay/Title';
import { Container } from '@coobrastur/ui/components/Layouts/Container';

import { Image } from '@components/Image';
import { Link } from '@components/Link';

import { NAVIGATIONS } from './helpers';

export const Footer = () => {
  return (
    <Container
      as="section"
      className="bg-[linear-gradient(14deg,#F4FAFE_10.1%,#FFF_90.4%)]"
    >
      <Container as="footer" size="xl" className="pt-20 pb-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:gap-10 xl:pl-28">
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
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <div>
            <div className="flex gap-2">
              <Link href="/">
                <Image
                  src="/images/icons/facebook.svg"
                  width={24}
                  height={24}
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/icons/linkedin.svg"
                  width={24}
                  height={24}
                  alt="Linkedin"
                  className="w-6 h-6"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/icons/youtube.svg"
                  width={24}
                  height={24}
                  alt="Youtube"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
          <Text size="sm">
            Grupo Coobrastur©2024 | Todos os direitos reservados.
          </Text>
        </div>
      </Container>
    </Container>
  );
};
