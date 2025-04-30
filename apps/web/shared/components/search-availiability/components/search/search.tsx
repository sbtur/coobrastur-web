'use client';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import { SearchResultContainer } from './search-result-container';
import { useSearch } from './use-search';

import { AccommodationSearchAutoComplete } from '@core/accommodations/use-cases/search-accommodation.use-case';
import { Icon } from '@ui/components/data-display/icon';
import { Text } from '@ui/components/data-display/text';
import { MapPin } from '@ui/lib/icons';

export const Search = () => {
  const { onChangeAutoCompleteSearch, searchPlaceResults } = useSearch();

  const handleOnSearch = async (value: string) => {
    onChangeAutoCompleteSearch({ query: value });
  };

  const handleOnSelect = (value: AccommodationSearchAutoComplete) => {
    console.log(value);
  };

  return (
    <div className="w-full">
      <Text className="text-white font-semibold text-base">
        Busque por Cidade ou Hotel
      </Text>

      <div className="w-full bg-white rounded-md py-1 px-3 mt-1.5 flex items-center group border-2 border-gray-200 transition-all duration-300 focus-within:border-highlight-100 focus-within:ring-1 focus-within:ring-highlight-100 focus-within:scale-105">
        <Icon size="lg" icon={MapPin} variant="primary" />
        <ReactSearchAutocomplete
          items={searchPlaceResults}
          onSearch={handleOnSearch}
          onHover={() => null}
          onSelect={handleOnSelect}
          onFocus={() => null}
          formatResult={SearchResultContainer}
          className="w-full p-0 m-0 font-semibold text-neutral-500 rounded-md placeholder:text-gray-600 placeholder:font-normal border-none focus:outline-none"
          styling={{
            backgroundColor: 'white',
            border: '0',
            boxShadow: 'none',
            borderRadius: '0',
            fontFamily: 'var(--font-source-sans-pro)',
            fontSize: 'text-sm',
            color: 'var(--color-primary-300)',
            placeholderColor: '#4b5563',
            clearIconMargin: '0',
            searchIconMargin: '0',
            zIndex: 4,
            hoverBackgroundColor: 'bg-secondary-100',
            lineColor: 'var(--color-primary-300)',
            height: '32px',
          }}
          showIcon={false}
          showNoResultsText="Nenhum resultado encontrado"
          maxResults={10}
          placeholder="Busque por Cidade ou Hotel"
          resultStringKeyName="name"
          showClear={false}
        />
      </div>
    </div>
  );
};
