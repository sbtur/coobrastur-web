import { Image } from '@components/image';
import { PARTNERS } from '@utils/data/partners';

import displayImage from '@images/pages/home/display/display.webp';
import { Heading } from '@ui/components/data-display/heading';
import { Title } from '@ui/components/data-display/title';
import { Button } from '@ui/components/data-entry/button';
import { Container } from '@ui/components/layouts/container';

export const Display = () => {
  return (
    <div className="bg-background h-screen">
      <div className="fixed top-0 left-0 right-0 h-full">
        <Image
          src={displayImage}
          alt="Logo"
          fill
          className="object-cover object-[33%_50%] fixed inset-0 -z-10"
          priority
          placeholder="blur"
          quality={100}
        />
      </div>
      <Container className="h-full border border-transparent">
        <Heading className="lg:w-2/3 mt-24 items-center text-center">
          <Title
            variant="white"
            className="text-3xl lg:text-[56px] leading-none"
          >
            Viaje mais todos os anos com a nossa Assinatura de hotéis
          </Title>
          <Button variant="outline-transparent" className="mt-5">
            Quero Viajar
          </Button>
        </Heading>
        <div className="hidden lg:flex w-full lg:w-[718px] mx-auto absolute bottom-36 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 p-5 rounded-md bg-white shadow-lg justify-around">
          {PARTNERS.map(partner => (
            <div key={partner.alt} className="max-w-[130px]">
              <Image
                {...partner}
                width={130}
                height={30}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
