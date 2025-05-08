import { IAccommodationService } from '../accommodation.interface';

export type AccommodationAvailableDatesUseCaseParams = {
  hotelId: number;
  yearMonth: string;
};

export type AccommodationAvailableDatesUseCaseResponse = {
  date: string;
  isAvailable: boolean;
};

export function accommodationAvailableDatesUseCase(
  service: IAccommodationService
) {
  return {
    async exec({
      hotelId,
      yearMonth,
    }: AccommodationAvailableDatesUseCaseParams): Promise<
      AccommodationAvailableDatesUseCaseResponse[]
    > {
      try {
        const response = await service.getAvailableDates({
          HotCode: hotelId,
          YearMonth: yearMonth,
        });

        return response.map(item => ({
          date: item.date,
          isAvailable: item.situation === 1,
        }));
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching accommodation available dates');
      }
    },
  };
}
