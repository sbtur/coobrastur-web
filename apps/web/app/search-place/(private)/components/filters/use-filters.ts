import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  pushUrlParams,
  removeUrlParams,
} from '@/shared/helpers/manage-url-params';

export const useFilters = () => {
  const searchParams = useSearchParams();
  const [filtersInitialSelected, setFiltersInitialSelected] = useState<
    Record<string, string>
  >({});

  const urlParams = useRef<Record<string, string>>({});

  useEffect(() => {
    urlParams.current = Object.fromEntries(searchParams.entries());

    setFiltersInitialSelected(urlParams.current);
  }, [searchParams]);

  const handleSetFilterSearch = (name: string, value: string) => {
    const params = urlParams.current;

    if (params[name]) {
      if (params[name].includes(value)) {
        const newValues = params[name]
          .split(',')
          .filter(item => item !== value);

        removeUrlParams({ key: name });
        pushUrlParams({ key: name, value: newValues.join(',') });
      } else {
        const newValues = `${params[name]},${value}`;

        removeUrlParams({ key: name });
        pushUrlParams({ key: name, value: newValues });
      }
    } else {
      pushUrlParams({ key: name, value });
    }
  };

  return {
    handleSetFilterSearch,
    filtersInitialSelected,
  };
};
