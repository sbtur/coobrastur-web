'use client';
import { useState } from 'react';

import { CalendarClock } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon/icon';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import { Accommodation, ByRequestDialog } from './by-request-dialog';

type ByRequestButtonProps = {
  accommodation: Accommodation;
};

export const ByRequestButton = ({ accommodation }: ByRequestButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="px-2 lg:px-8"
        onClick={() => setOpen(true)}
      >
        Solicitar Reserva{' '}
        <Icon icon={CalendarClock} className="w-4 h-4 text-white" />
      </Button>
      <ByRequestDialog
        open={open}
        onOpenChange={setOpen}
        accommodation={accommodation}
      />
    </>
  );
};
