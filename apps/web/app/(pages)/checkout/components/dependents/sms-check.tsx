import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Input } from '@coobrastur/ui/components/data-entry/input';

export function SmsCheck({ phoneNumber }: { phoneNumber: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <Title className="mb-8">Beneficiários</Title>
      <Text className="text-neutral-500 font-semibold mb-6">
        Enviamos um código de 4 dígitos para o número {phoneNumber}
      </Text>
      <Text className="text-neutral-500 font-normal mb-6">
        Insira-o para concluir o cadastro do beneficiário
      </Text>

      <div className="flex justify-center gap-4 mb-6 w-full">
        <Input
          type="text"
          placeholder="0"
          className="w-12 h-12 text-center text-2xl font-bold"
          maxLength={1}
        />
        <Input
          type="text"
          placeholder="0"
          className="w-12 h-12 text-center text-2xl font-bold"
          maxLength={1}
        />
        <Input
          type="text"
          placeholder="0"
          className="w-12 h-12 text-center text-2xl font-bold"
          maxLength={1}
        />
        <Input
          type="text"
          placeholder="0"
          className="w-12 h-12 text-center text-2xl font-bold"
          maxLength={1}
        />
      </div>
      <Button className="w-full">Confirmar Hóspede</Button>
    </div>
  );
}
