import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  pushUrlParams,
  removeUrlParams,
} from '@/shared/helpers/manage-url-params';

type formFilters = {
  category: string[];
  service: string[];
  extra: string[];
  neighborhood: string[];
  destination: string[];
};

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filtersInitialSelected, setFiltersInitialSelected] = useState<
    Record<string, string>
  >({});
  const [openFilterDialogContent, setOpenFilterDialogContent] = useState(false);

  const urlParams = useRef<Record<string, string>>({});
  const form = useForm<formFilters>({
    defaultValues: {
      category: [],
      service: [],
      extra: [],
      neighborhood: [],
      destination: [],
    },
  });

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

  const handleSubmitFilterSearch = (data: formFilters) => {
    const newFilterValues = Object.entries(data)
      .filter(
        ([_, value]) => value && (Array.isArray(value) ? value.length : true)
      )
      .map(([key, value]) =>
        Array.isArray(value) ? `${key}=${value.join(',')}` : `${key}=${value}`
      )
      .join('&');

    setOpenFilterDialogContent(false);

    router.push(
      `?code=${urlParams.current.code}&startDate=${urlParams.current.startDate}&endDate=${urlParams.current.endDate}&${newFilterValues}`
    );
  };

  return {
    handleSetFilterSearch,
    filtersInitialSelected,
    form,
    handleSubmitFilterSearch,
    openFilterDialogContent,
    setOpenFilterDialogContent,
  };
};
