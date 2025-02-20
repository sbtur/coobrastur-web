import { Button, Container, Heading } from '@workspace/ui/components';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Image } from '@components/Image';

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
