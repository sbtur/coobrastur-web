import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import { Label } from '@coobrastur/ui/components/data-entry/label';

export const Form = () => {
  return (
    <div id="formulario-consultor" className="mx-auto flex flex-col justify-center items-center mt-20 lg:mt-32">
      <Heading className="text-center max-w-[530px]">
        <Title size="xl">Quer se preparar para sua próxima viagem?</Title>
        <Text size="sm">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato para planejar a sua próxima grande viagem.
        </Text>
      </Heading>
      <form className=" p-6 rounded-2xl border border-neutral-300 lg:w-full lg:max-w-3xl mt-4 mb-20 mx-8">
        <div className="grid grid-cols lg:grid-cols-2 gap-6">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="departure">Data de Ida</Label>
            <Input
              id="departure"
              type="text"
              placeholder="MM/DD/YY"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="return">Data de Volta</Label>
            <Input
              id="return"
              type="text"
              placeholder="MM/DD/YY"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="adults">Quantidade de Adultos</Label>
            <Input
              id="adults"
              type="text"
              placeholder="Adulto"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="children">Quantidade de Crianças</Label>
            <Input
              id="children"
              type="text"
              placeholder="Criança"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button variant="outline-white" className="shadow-none border">
            Cancel
          </Button>
          <Button type="submit" className="w-3/6 lg:w-fit">
            Falar com especialista
          </Button>
        </div>
      </form>
    </div>
  );
};
