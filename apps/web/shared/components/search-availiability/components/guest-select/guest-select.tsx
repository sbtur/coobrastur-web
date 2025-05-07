'use client';
import { useMemo } from 'react';

import { CalendarCheckIcon, PlusCircle } from 'lucide-react';

import { RoomSection } from './room-section';
import { Room, useGuestSelect } from './use-guest-select';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Card } from '@ui/components/data-display/card';
import { Icon } from '@ui/components/data-display/icon';
import { Button } from '@ui/components/data-entry/button';
import { Label } from '@ui/components/data-entry/label';

interface GuestSelectProps {
  onSelectGuest: (rooms: Room[]) => void;
}

export const GuestSelect = ({ onSelectGuest }: GuestSelectProps) => {
  const { rooms, dispatch, isOpen, setIsOpen } = useGuestSelect();

  const totalGuest = useMemo(() => {
    return rooms.reduce((acc, room) => acc + room.adults + room.children, 0);
  }, [rooms]);

  return (
    <div className="w-full relative z-10">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <div className="grid gap-1.5">
          <Label
            htmlFor="room-and-guests"
            className="text-sm font-semibold text-white"
          >
            Quarto e Hóspede
          </Label>
          <PopoverTrigger asChild>
            <button
              id="room-and-guests"
              className="w-full font-secondary p-2 px-3 justify-start text-gray-600 text-left font-semibold bg-white items-center flex gap-2 whitespace-nowrap rounded-md text-base border-gray-200 border-2 hover:bg-secondary-100 data-[state=open]:border-highlight-100 data-[state=open]:ring-highlight-100 data-[state=open]:transition-all data-[state=open]:duration-300 data-[state=open]:scale-105"
              aria-label="Selecionar quarto e hóspedes"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon icon={CalendarCheckIcon} variant="primary" />
              Quarto {rooms.length}, Hóspedes {totalGuest}
            </button>
          </PopoverTrigger>
        </div>

        <PopoverContent
          className="w-[353px] p-0 bg-white rounded-xl shadow-lg border-0 mt-3"
          align="start"
          side="bottom"
        >
          <Card className="w-full h-fit p-4 bg-white rounded-md">
            <div className="space-y-4">
              {rooms.map(room => (
                <RoomSection key={room.id} room={room} dispatch={dispatch} />
              ))}

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-[160px] h-[30px] text-[10px] flex items-center"
                  onClick={() => dispatch({ type: 'addRoom' })}
                >
                  <PlusCircle className="h-3 w-3 uppercase" />
                  Adicionar quarto
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    onSelectGuest(rooms);
                    setIsOpen(false);
                  }}
                >
                  Salvar
                </Button>
              </div>
            </div>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};
