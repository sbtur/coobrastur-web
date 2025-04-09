'use client';
import { useState } from 'react';

import { Section } from '@coobrastur/ui/components/layouts/section';

import { AUTO_COMPLETE_MOCK } from '@/shared/mocks/search-auto-complete';

import { Autocomplete } from './autocomplete';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';
import { Container } from '@ui/components/layouts/container';
import { MapPin, Search as SearchIcon } from '@ui/lib/icons';

async function autoCompleteSearch(value: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const places = AUTO_COMPLETE_MOCK.filter(place =>
        place.name.toLowerCase().startsWith(value.toLowerCase()),
      );

      if (places.length <= 0) {
        reject({
          success: false,
          data: [],
          message: 'Nenhum lugar encontrado',
        });
      }

      resolve({
        success: true,
        data: places,
      });
    }, 0);
  });
}

export const Search = () => {
  const [places, setPlaces] = useState<any[]>([]);

  const handleSearch = async (value: string) => {
    try {
      const response = await autoCompleteSearch(value);
      setPlaces((response as any).data);
    } catch (err: any) {
      setPlaces([]);
    }
  };

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-between">
          <form action="" onSubmit={e => e.preventDefault()}>
            <div className="flex items-center gap-2 bg-background rounded-[10px] p-2 shadow-lg">
              <div className="w-[280px] md:w-[380px] pl-4 md:pl-10">
                <Text className="leading-none">Escolha o Hotel ou Cidade:</Text>
                <div className="flex items-center gap-1">
                  <Icon size="lg" icon={MapPin} variant="highlight" />
                  <Autocomplete items={places} onSearch={handleSearch} />
                </div>
              </div>

              <Button className="w-[63px] h-[63px] rounded-[10px]">
                <Icon icon={SearchIcon} variant="white" />
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};
