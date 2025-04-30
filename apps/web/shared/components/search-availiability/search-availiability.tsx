import { InfoIcon } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { DateRangePicker } from '@coobrastur/ui/components/data-entry/date-range-picker';
import { GuestSelect } from '@coobrastur/ui/components/data-entry/guest-select';
import { Switch } from '@coobrastur/ui/components/data-entry/switch';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { Search } from './components/search';

export function SearchAvailiability() {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center">
        <div className="bg-primary-300 rounded-[10px] py-10 px-8 grid gap-4 lg:gap-6 w-full">
          <div className="grid gap-4 lg:grid-cols-[28.17%_34.87%_22.35%_96px] xl:grid-cols-[32.17%_34.87%_22.35%_96px] lg:items-center">
            <Search />
            <DateRangePicker />
            <GuestSelect />
            <Button className="self-end">Buscar</Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-[210px_auto]">
            <Text
              as="div"
              className="flex items-center gap-2 font-secondary text-sm text-neutral-100"
            >
              <Switch id="date-unselected" checked={false} /> Ainda não defini
              as datas
            </Text>
            <Text
              as="div"
              className="text-xs text-neutral-300 flex items-center gap-1"
            >
              <Icon icon={InfoIcon} />
              <div>
                Períodos com menos de 30 dias de antecedência estarão sujeitos à{' '}
                <strong>aprovação</strong> ou <strong>recusa</strong> do hotel.
              </div>
            </Text>
          </div>
          <button className="font-secondary text-xs text-neutral-300 underline text-center mt-4 lg:hidden">
            Recolher busca
          </button>
        </div>
      </Container>
    </Section>
  );
}
