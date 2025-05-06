'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import { InfoIcon } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Text } from '@coobrastur/ui/components/data-display/text';
import { Button } from '@coobrastur/ui/components/data-entry/button';
import { Switch } from '@coobrastur/ui/components/data-entry/switch';
import { Container } from '@coobrastur/ui/components/layouts/container';
import { Section } from '@coobrastur/ui/components/layouts/section';

import { DateRangePicker } from './components/date-range-picker';
import { GuestSelect } from './components/guest-select';
import { Search } from './components/search';

export interface DateRangeFormatted {
  checkIn: string;
  checkOut: string;
}

export function SearchAvailiability() {
  const router = useRouter();
  const dateRef = useRef<DateRangeFormatted>({ checkIn: '', checkOut: '' });
  const guestRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<string>('');

  const onSelectDate = ({ checkIn, checkOut }: DateRangeFormatted) => {
    dateRef.current = { checkIn, checkOut };
  };

  const onSelectGuest = (guest: any) => {
    guestRef.current = guest;
  };

  const onSelectSearch = ({ hotelId }: { hotelId: string }) => {
    searchRef.current = hotelId;
  };

  const onSubmit = () => {
    console.log(dateRef.current, guestRef.current, searchRef.current);

    router.push(
      `?hotel=${searchRef.current}&checkIn=${dateRef.current.checkIn}&checkOut=${dateRef.current.checkOut}`
    );
  };
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center">
        <div className="bg-primary-300 rounded-[10px] py-10 px-8 grid gap-4 lg:gap-6 w-full">
          <div className="grid gap-4 lg:grid-cols-[28.17%_34.87%_22.35%_96px] xl:grid-cols-[32.17%_34.87%_22.35%_96px] lg:items-center">
            <Search onSelectSearch={onSelectSearch} />
            <DateRangePicker onSelectDate={onSelectDate} />
            <GuestSelect onSelectGuest={onSelectGuest} />
            <Button className="self-end" onClick={onSubmit}>
              Buscar
            </Button>
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
