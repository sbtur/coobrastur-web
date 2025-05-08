import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useRouter, useSearchParams } from 'next/navigation';

import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { makeAccommodationsUseCase } from '@/@core/accommodations/make-accommodations.use-cases';
import { AccommodationAvailableDatesUseCaseResponse } from '@/@core/accommodations/use-cases/accommodation-available-dates.use-case';

import {
  DateRangeFormatted,
  UseAvailableDatesActionsReturn,
} from './available-dates.types';

export const useAvailableDatesActions = (): UseAvailableDatesActionsReturn => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [formatedDate, setFormatedDate] =
    useState<DateRangeFormatted>(undefined);
  const [rangeAvailableDates, setRangeAvailableDates] = useState<
    AccommodationAvailableDatesUseCaseResponse[]
  >([]);

  const params = useSearchParams();
  const router = useRouter();

  const startDate = params.get('startDate');
  const endDate = params.get('endDate');

  useEffect(() => {
    if (startDate && endDate) {
      const parsedStartDate = parse(startDate, 'yyyy-MM-dd', new Date());
      const parsedEndDate = parse(endDate, 'yyyy-MM-dd', new Date());

      setDate({
        from: parsedStartDate,
        to: parsedEndDate,
      });

      setFormatedDate({
        from: format(parsedStartDate, 'dd/MM/yyyy'),
        to: format(parsedEndDate, 'dd/MM/yyyy'),
      });
    }
  }, [endDate, startDate]);

  const handleSelectDate = (date: DateRange | undefined) => {
    if (!date) {
      return;
    }

    setDate(date);

    if (!date?.from || !date?.to) {
      return;
    }

    setFormatedDate({
      from: format(date.from!, 'dd/MM/yyyy'),
      to: format(date.to!, 'dd/MM/yyyy'),
    });

    // const entries = Object.fromEntries(params.entries());

    // const newParams = new URLSearchParams(entries);

    // newParams.set(
    //   'startDate',
    //   format(date.from, 'yyyy-MM-dd', { locale: ptBR })
    // );
    // newParams.set('endDate', format(date.to, 'yyyy-MM-dd', { locale: ptBR }));

    // router.push(`?${newParams.toString()}`);
  };

  const handleSubmitNewDates = () => {
    if (!date?.from || !date?.to) {
      return;
    }

    const entries = Object.fromEntries(params.entries());

    const newParams = new URLSearchParams(entries);

    newParams.set(
      'startDate',
      format(date.from, 'yyyy-MM-dd', { locale: ptBR })
    );
    newParams.set('endDate', format(date.to, 'yyyy-MM-dd', { locale: ptBR }));

    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    const fetchAvailableDates = async () => {
      if (!startDate) {
        return;
      }
      const hotelId = params.get('code');

      const response =
        await makeAccommodationsUseCase().accommodationAvailableDatesUseCase.exec(
          {
            hotelId: Number(hotelId),
            yearMonth: format(startDate, 'yyyy-MM'),
          }
        );

      setRangeAvailableDates(response);
    };
    fetchAvailableDates();
  }, [params, startDate]);

  const createRangeDates = (date: Date) => {
    const formattedDate = format(date, 'dd/MM/yyyy');

    const foundDate = rangeAvailableDates.find(d => d.date === formattedDate);
    return !foundDate || !foundDate.isAvailable;
  };

  return {
    handleSelectDate,
    handleSubmitNewDates,
    date,
    formatedDate,
    createRangeDates,
  };
};
