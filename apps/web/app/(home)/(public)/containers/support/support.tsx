import { Content } from '@coobrastur/ui/components/layouts/content';

import { Image } from '@components/image';

import {
  SupportListDesktop,
  SupportListMobile,
} from './components/support-list';

import supportImage from '@images/pages/home/support-image.png';
import { Badge } from '@ui/components/data-display/badge';
import { Heading } from '@ui/components/data-display/heading';
import { Text } from '@ui/components/data-display/text';
import { Title } from '@ui/components/data-display/title';
import { Container } from '@ui/components/layouts/container';
import { Section } from '@ui/components/layouts/section';

export const Support = () => {
  return (
    <Section
      as="section"
      className="pt-14 mt-24 bg-[#001F3D] bg-gradient-to-r from-[#001F3D] from-[31.41%] to-[#2E6299] relative"
    >
      <Container className="lg:pt-16">
        <Heading className="px-0 items-center text-center lg:items-start lg:text-left">
          <Badge variant="default">Tudo o que precisa</Badge>
          <Title size="xl" variant="white">
            Conte com suporte completo
          </Title>
          <Text className="text-white max-w-[700px] xl:max-w-full">
            A combinação ideal para transformar sua viagem dos sonhos em uma
            experiência única e inesquecível
          </Text>
        </Heading>

        <Content className="bg-transparent">
          <SupportListDesktop />
          <SupportListMobile />
        </Content>

        <Image
          src={supportImage}
          alt="Imagem chat bot Clara sendo utilizado no celular"
          width={506}
          height={622}
          className="absolute right-0 -bottom-[56px] hidden lg:block"
          placeholder="blur"
        />
      </Container>
    </Section>
  );
};
