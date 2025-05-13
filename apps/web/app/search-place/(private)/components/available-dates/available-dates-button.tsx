'use client';
import { useState } from 'react';

import { Button } from '@coobrastur/ui/components/data-entry/button/button';

import { AvailableDates } from './available-dates';

type AvailableDatesButtonProps = {
  description: {
    name: string;
    street: string;
  };
};

export const AvailableDatesButton = ({
  description,
}: AvailableDatesButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AvailableDates
        description={description}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Button
        variant="outline-secondary"
        className="px-2 lg:px-8"
        onClick={() => setIsOpen(true)}
      >
        Datas disponíveis
      </Button>
    </>
  );
};
