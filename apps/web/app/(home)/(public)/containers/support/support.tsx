import { Image } from '@components/image';

import { SupportList } from './components/support-list';

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
      className="bg-[#001F3D] bg-gradient-to-r from-[#001F3D] from-[31.41%] to-[#2E6299] relative"
    >
      <Container className="lg:pt-16">
        <Heading align="left" className="px-0">
          <Badge variant="default">Tudo o que precisa para a sua viagem</Badge>
          <Title size="xl" variant="white" align="left">
            Conte com suporte completo
          </Title>
          <Text className="text-white !max-w-full" align="left">
            A combinação ideal para transformar sua viagem dos sonhos em uma
            experiência única e inesquecível
          </Text>
        </Heading>

        <SupportList />
        <Image
          src="/images/pages/home/support-image.png"
          alt="Imagem chat bot Clara sendo utilizado no celular"
          width={506}
          height={622}
          className="absolute right-0 -bottom-[56px] hidden lg:block"
        />
      </Container>
    </Section>
  );
};
