import { ArrowRight, Calendar } from 'lucide-react';

import { PriceDetails } from './PriceDetails';

import { Icon } from '@ui/components/DataDisplay/Icon';
import { Button } from '@ui/components/DataEntry/Button';

interface AvailableBookingActionsProps {
  bookingType: 'BOOKABLE' | 'REQUESTABLE';
  extraPrice: number;
  availableDays: number;
}

export const AvailableBookingActions = ({
  bookingType,
  extraPrice,
  availableDays,
}: AvailableBookingActionsProps) => {
  return (
    <div className="flex justify-between pt-5">
      <PriceDetails
        additionalPrice={extraPrice}
        availableDays={availableDays}
      />

      {bookingType === 'BOOKABLE' && (
        <Button variant="default" className="w-64 flex items-center gap-2 p-6">
          Reservar
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}

      {bookingType === 'REQUESTABLE' && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 p-3 h-[44px] text-md border-primary-100 text-primary-100"
          >
            Datas disponíveis
          </Button>

          <Button
            variant="default"
            className="flex items-center gap-2 p-3 h-[44px] text-md bg-primary-100"
          >
            Solicitar Reserva{' '}
            <Icon icon={Calendar} className="w-4 h-4 text-white" />
          </Button>
        </div>
      )}
    </div>
  );
};
