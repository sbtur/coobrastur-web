import { Trash } from 'lucide-react';

import { Badge } from '../../data-display/badge';
import { Text } from '../../data-display/text';
import { CounterButton } from './counter-button';
import {
  MAXIMUM_GUEST,
  MINIMAL_GUEST,
  MINIMAL_GUEST_CHILDREN,
  Room,
  useGuest,
} from './guest-provider';

interface RoomSectionProps {
  room: Room;
}

export function RoomSection({ room }: RoomSectionProps) {
  const { dispatch } = useGuest();

  return (
    <div className="space-y-4 border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between">
        <Badge variant="default" className="bg-blue-50 p-2 text-xs font-bold">
          QUARTO {room.id + 1}
        </Badge>

        {room.id > 0 && (
          <button
            onClick={() => dispatch({ type: 'removeRoom', payload: room })}
            className="flex items-center gap-1 text-neutral-400 text-xs hover:text-neutral-600"
          >
            Remover <Trash className="h-3 w-3" />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="max-w-[180px] pr-4">
            <Text className="font-bold font-primary text-2xl text-primary-300">
              Adultos
            </Text>
            <Text className="text-neutral-400 text-sm">Maiores de 18 anos</Text>
          </div>
          <div className="flex items-center gap-6">
            <CounterButton
              icon="minus"
              isDisabled={room.adults <= MINIMAL_GUEST}
              onClick={() =>
                dispatch({
                  type: 'decreaseAdults',
                  payload: room,
                })
              }
            />
            <Text className="font-bold font-primary text-lg text-primary-300 min-w-[14px]">
              {room.adults}
            </Text>
            <CounterButton
              icon="plus"
              isDisabled={room.adults >= MAXIMUM_GUEST}
              onClick={() =>
                dispatch({
                  type: 'increaseAdults',
                  payload: room,
                })
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="max-w-[180px] pr-4">
            <Text className="font-bold font-primary text-2xl text-primary-300">
              Crianças
            </Text>
            <Text className="text-neutral-400 text-sm">Até 17 anos</Text>
          </div>
          <div className="flex items-center gap-6">
            <CounterButton
              icon="minus"
              isDisabled={room.children <= MINIMAL_GUEST_CHILDREN}
              onClick={() =>
                dispatch({
                  type: 'decreaseChildren',
                  payload: room,
                })
              }
            />
            <Text className="font-bold font-primary text-lg text-primary-300 min-w-[14px]">
              {room.children}
            </Text>
            <CounterButton
              icon="plus"
              isDisabled={room.children >= MAXIMUM_GUEST}
              onClick={() =>
                dispatch({
                  type: 'increaseChildren',
                  payload: room,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
