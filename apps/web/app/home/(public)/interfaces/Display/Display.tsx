import { Heading } from '@workspace/ui/components/DataDisplay/Heading';
import { Title } from '@workspace/ui/components/DataDisplay/Title';
import { Button } from '@workspace/ui/components/DataEntry/Button';
import { Container } from '@workspace/ui/components/Layouts/Container';

import { Image } from '@components/Image';

export const Display = () => {
  return (
    <Container size="full" padding="none" className="bg-background h-screen">
      <div className="fixed top-0 left-0 right-0 h-full">
        <Image
          src="/images/pages/home/display/display.jpg"
          alt="Logo"
          fill
          className="object-cover fixed inset-0 -z-10"
          priority
        />
      </div>
      <div className="relative h-full border border-transparent">
        <Heading align="center" className="w-2/3 mt-24">
          <Title
            align="center"
            variant="white"
            size="2xl"
            className="text-[56px] leading-none"
          >
            Viaje mais todos os anos com a sua assinatura de hotéis
          </Title>
          <Button variant="outline-white" className="mt-5">
            Quero Viajar
          </Button>
        </Heading>
        <div className="w-[718px] mx-auto absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 p-8 rounded-full bg-white justify-around">
          <div>
            <Image
              src="/images/shared/logos/coob.png"
              alt="Coob+"
              width={112}
              height={25}
            />
          </div>
          <div>
            <Image
              src="/images/shared/logos/viajar-faz-bem.png"
              alt="Viajar Faz Bem"
              width={101}
              height={27}
            />
          </div>
          <div>
            <Image
              src="/images/shared/logos/meridien.png"
              alt="Meridien"
              width={120}
              height={35}
            />
          </div>
          <div>
            <Image
              src="/images/shared/logos/banstur.png"
              alt="Basntur"
              width={125}
              height={23}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
