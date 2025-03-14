import { Image } from '@components/Image';

import { PARTNERS } from './helpers/partners';

import displayImage from '@images/pages/home/display/display.jpg';
import { Heading } from '@ui/components/DataDisplay/Heading';
import { Title } from '@ui/components/DataDisplay/Title';
import { Button } from '@ui/components/DataEntry/Button';
import { Container } from '@ui/components/Layouts/Container';

export const Display = () => {
  return (
    <Container padding="none" className="bg-background h-screen">
      <div className="fixed top-0 left-0 right-0 h-full">
        <Image
          src={displayImage}
          alt="Logo"
          fill
          className="object-cover fixed inset-0 -z-10"
          priority
          placeholder="blur"
        />
      </div>
      <Container size="xl" className="h-full border border-transparent">
        <Heading align="center" className="lg:w-2/3 mt-24">
          <Title
            align="center"
            variant="white"
            className="text-3xl lg:text-[56px] leading-none"
          >
            Viaje mais todos os anos com a sua assinatura de hotéis
          </Title>
          <Button variant="outline-white" className="mt-5">
            Quero Viajar
          </Button>
        </Heading>
        <div className="w-full lg:w-[718px] mx-auto absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 p-4 md:p-8 rounded-[10px] md:rounded-[20px] bg-white justify-around">
          {PARTNERS.map(partner => (
            <div key={partner.alt}>
              <Image {...partner} />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};
