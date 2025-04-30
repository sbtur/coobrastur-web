import { InfoIcon } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { DateRangePicker } from '@coobrastur/ui/components/data-entry/date-range-picker';
import { GuestSelect } from '@coobrastur/ui/components/data-entry/guest-select';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { Search } from './components/search';

export function SearchAvailiability() {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center">
        <div className="bg-primary-300 rounded-[10px] py-10 px-8 grid gap-4 w-full">
          <Search />
          <DateRangePicker />
          <GuestSelect />
          <Button>Buscar</Button>
          <Text as="div" className="font-secondary text-sm text-neutral-100">
            Ainda não defini as datas
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
          <button className="font-secondary text-xs text-neutral-300 underline text-center mt-4">
            Recolher busca
          </button>
        </div>
      </Container>
    </Section>
  );
}
