'use client';

import { useRef } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useRouter } from 'next/navigation';

import { Section } from '@coobrastur/ui/components/layouts/section';

import { pushUrlParams } from '@/shared/helpers/manage-url-params';

import { AutoCompleteSearchResponse } from '../../http/accommodation';
import { useSearchAccommodation } from '../../providers/search-provider';
import { FormatSearchResultItems } from './format-search-result-items';
import { useSearch } from './use-search';

import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { Button } from '@ui/components/data-entry/button';
import { Container } from '@ui/components/layouts/container';
import { MapPin, Search as SearchIcon } from '@ui/lib/icons';

export const Search = () => {
  const { getListOfAccommodations } = useSearchAccommodation();

  const { onChangeAutoCompleteSearch, searchPlaceResults } = useSearch();

  const selectedPlaceToSearchAccommodation = useRef<string>('');

  const handleOnSearch = async (value: string) => {
    onChangeAutoCompleteSearch(value);
  };

  const handleOnSelect = (value: AutoCompleteSearchResponse) => {
    selectedPlaceToSearchAccommodation.current = value.id;
  };

  const handleSubmitSearch = () => {
    getListOfAccommodations({
      accommodationId: selectedPlaceToSearchAccommodation.current,
    });

    pushUrlParams({
      key: 's',
      value: selectedPlaceToSearchAccommodation.current,
    });
  };

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between">
          <form action="" onSubmit={e => e.preventDefault()}>
            <div className="flex items-center gap-2 bg-background rounded-[10px] p-2 shadow-lg">
              <div className="w-[280px] md:w-[380px] pl-4 md:pl-10">
                <Text className="leading-none">Escolha o Hotel ou Cidade:</Text>
                <div className="flex items-center gap-1">
                  <Icon size="lg" icon={MapPin} variant="highlight" />
                  <ReactSearchAutocomplete
                    items={searchPlaceResults}
                    onSearch={handleOnSearch}
                    onHover={() => null}
                    onSelect={handleOnSelect}
                    onFocus={() => null}
                    autoFocus
                    formatResult={FormatSearchResultItems}
                    className="w-full p-0 font-semibold text-primary-300 placeholder:text-text-body placeholder:font-normal focus:outline-none"
                    styling={{
                      backgroundColor: 'white',
                      border: '0',
                      boxShadow: 'none',
                      borderRadius: '0',
                      fontFamily: 'var(--font-source-sans-pro)',
                      fontSize: 'text-sm',
                      color: 'var(--color-primary-300)',
                      placeholderColor: 'var(--color-body)',
                      clearIconMargin: '0',
                      searchIconMargin: '0',
                      zIndex: 4,
                      hoverBackgroundColor: 'bg-secondary-100',
                      lineColor: 'var(--color-primary-300)',
                    }}
                    showIcon={false}
                    showNoResultsText="Nenhum resultado encontrado"
                    maxResults={10}
                    placeholder="Digite o nome da cidade ou hotel"
                    resultStringKeyName="name"
                  />
                </div>
              </div>

              <Button
                className="w-[63px] h-[63px] rounded-[10px]"
                onClick={handleSubmitSearch}
              >
                <Icon icon={SearchIcon} variant="white" />
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};
