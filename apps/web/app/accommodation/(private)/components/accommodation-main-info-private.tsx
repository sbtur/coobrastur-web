import { Badge } from '@coobrastur/ui/components/data-display/badge';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Separator } from '@coobrastur/ui/components/data-display/separator';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { ArrowRight, Receipt } from '@coobrastur/ui/lib/icons';

import { AccommodationMainInfoContainer } from '../../components/accommodation-main-info-container';

export const AccommodationMainInfoPrivate = () => {
  return (
    <AccommodationMainInfoContainer>
      <Badge>Gold</Badge>
      <div className="space-y-1 text-left">
        <Title>Intercity Florianópolis</Title>
        <Text>Av. Paulo Fontes, 1210, Centro de Florianópolis</Text>
      </div>

      <Separator />

      <Text as="div" className="my-4">
        <span className="font-bold font-primary text-highlight-100 text-2xl">
          3 Diárias
        </span>{' '}
        <br />
        <Icon icon={Receipt} />
        R$580,00{' '}
        <Button
          variant="link"
          className="inline-block text-neutral-500 underline p-0"
        >
          adicionais
        </Button>
      </Text>

      <Button size="lg" className="w-full rounded-[10px]">
        Reservar <Icon icon={ArrowRight} variant="white" />
      </Button>
    </AccommodationMainInfoContainer>
  );
};
