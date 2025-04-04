import { Image } from '@components/image';
import { Link } from '@components/link';

import { NAVIGATIONS, SOCIAL_LINKS } from './helpers';

import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#E0ECF3] via-[#E0ECF3] via-60% to-white relative">
      <Container className="pt-20 pb-5">
        <div className="grid grid-rows-2 grid-flow-col lg:grid-cols-4 lg:grid-rows-none gap-6 xl:gap-10 xl:pl-28">
          {NAVIGATIONS.map(navigation => (
            <div className="flex flex-col gap-3" key={navigation.title}>
              <Title as="h2" size="xs">
                {navigation.title}
              </Title>
              {navigation.items.map(item =>
                item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm lg:text-base text-text-body"
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Text className="text-sm lg:text-base" key={item.label}>
                    {item.label}
                  </Text>
                ),
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <div>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(social => (
                <a
                  href={social.href}
                  target="_blank"
                  key={social.alt}
                  rel="noreferrer"
                >
                  <Image
                    src={social.icon}
                    width={24}
                    height={24}
                    alt={social.alt}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
          <Text size="sm">
            Grupo Coobrastur©2024 | Todos os direitos reservados.
          </Text>
        </div>
      </Container>
    </footer>
  );
};
