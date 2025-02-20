import { Button, Container, Heading } from '@workspace/ui/components';

import { Footer, Header, Image } from '@components';

import { Advantages } from './interfaces/Advantages';
import { Destinations } from './interfaces/Destinations';
import { Hotels } from './interfaces/Hotels';
import { Partners } from './interfaces/Partners';
import { Support } from './interfaces/Support';
import { Testimonials } from './interfaces/Testimonials';

export function HomePublic() {
  return (
    <>
      <Container size="full" padding="none" className="fixed h-screen bg-white">
        <Image
          src="/images/pages/home/display.jpg"
          alt="Logo"
          fill
          className="object-cover fixed inset-0 -z-10"
          priority
        />
      </Container>

      <Container as="section" className="relative h-screen flex-col">
        <Header />
        <Heading.Root align="center" className="w-2/3 mt-24">
          <Heading.Title
            align="center"
            variant="white"
            size="2xl"
            className="text-[56px] leading-none"
          >
            Viaje mais todos os anos com a sua assinatura de hotéis
          </Heading.Title>
          <Button variant="outline-white" className="mt-5">
            Quero Viajar
          </Button>
        </Heading.Root>

        <div className="w-[718px] mx-auto absolute bottom-14 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 p-8 rounded-full bg-white justify-around">
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
      </Container>

      <Container size="full" className="relative z-10">
        <Hotels />

        <Partners />

        <Advantages />

        <Destinations />

        <Support />

        <Testimonials />

        <Footer />
      </Container>
    </>
  );
}
