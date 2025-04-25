import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Label } from '@coobrastur/ui/components/data-entry/label';
import { Input } from '@coobrastur/ui/components/data-entry/input';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';

export const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 lg:mt-32">
      <Heading className="text-center">
        <Title size="xl">Quer se preparar para sua próxima viagem?</Title>
        <Text size="sm">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato para planejar a sua próxima grande viagem.
        </Text>
      </Heading>
      <form className=" p-8 rounded-2xl border border-neutral-300 w-full max-w-2xl mt-8 mb-20">
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
        <div className="flex justify-between mx-auto mt-6">
          <Button variant="outline-white" className='text-neutral-500 border-neutral-300'>Cancel</Button>
          <Button type="submit" className='w-1/2'>Falar com especialista</Button>
        </div>
      </form>
    </div>
  );
};
