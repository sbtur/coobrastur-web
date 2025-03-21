import { Calendar } from 'lucide-react';

import { Icon } from '@ui/components/DataDisplay/Icon';
import { Button } from '@ui/components/DataEntry/Button';

export const UnavailableBookingActions = () => {
  return (
    <div className="flex justify-end pt-5">
      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled
          className="flex items-center gap-2 p-3 h-[44px] text-md border-gray-700 text-gray-700 opacity-50 cursor-not-allowed"
        >
          Datas disponíveis
        </Button>

        <Button
          variant="default"
          disabled
          className="flex items-center gap-2 p-3 h-[44px] text-md bg-primary-100 cursor-not-allowed bg-gray-700"
        >
          Indisponível
          <Icon icon={Calendar} className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
};
