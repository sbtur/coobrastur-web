'use client';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

type AccommodationItem = {
  name: string;
  uf: string;
  country: string;
};

export const Autocomplete = ({
  items,
  onSearch,
  onSelect,
}: {
  items: AccommodationItem[];
  onSearch: (value: string) => void;
  onSelect: (value: string) => void;
}) => {
  const handleOnSearch = (value: string, results: AccommodationItem[]) => {
    console.log('handleOnSearch', results);
    onSearch(value);
  };

  const handleOnHover = (result: any) => {};

  const handleOnSelect = (value: AccommodationItem) => {
    console.log('handleOnSelect', value);
    onSelect(value.name);
  };

  const handleOnFocus = () => {};

  const formatResult = (item: AccommodationItem) => {
    return (
      <div className="py-4 hover:bg-secondary-100 cursor-pointer">
        <span className="font-semibold text-base text-neutral-500">
          {item.name}
        </span>
        <br />
        <span className="text-sm text-neutral-400">
          {item.uf}, {item.country}
        </span>
      </div>
    );
  };

  return (
    <ReactSearchAutocomplete
      items={items}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}
      className="w-full p-0 font-normal text-primary-300 placeholder:text-text-body placeholder:font-normal focus:outline-none"
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
  );
};
