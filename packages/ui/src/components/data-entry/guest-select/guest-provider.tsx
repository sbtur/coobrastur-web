import { createContext, Dispatch, useContext, useReducer } from 'react';

import { PlusCircle } from 'lucide-react';

import { cn } from '@coobrastur/ui/lib/utils';

import { Card } from '../../data-display/card';
import { Button } from '../button';
import { RoomSection } from './room-section';

export interface Room {
  id: number;
  adults: number;
  children: number;
}

interface GuestContextData {
  rooms: Room[];
  dispatch: Dispatch<Action>;
}

const GuestContext = createContext<GuestContextData | undefined>(undefined);

const initialRoom = {
  id: 0,
  adults: 1,
  children: 0,
};

interface Action {
  type:
    | 'addRoom'
    | 'removeRoom'
    | 'increaseAdults'
    | 'decreaseAdults'
    | 'increaseChildren'
    | 'decreaseChildren';
  payload?: Room;
}

export const MINIMAL_GUEST_CHILDREN = 0;
export const MINIMAL_GUEST = 1;
export const MAXIMUM_GUEST = 10;

const manageRoom = (state: Room[], action: Action): Room[] => {
  switch (action.type) {
    case 'addRoom':
      return [...state, { ...initialRoom, id: state.length }];

    case 'removeRoom': {
      const remainingRooms = state
        .filter(room => room.id !== action?.payload?.id)
        .map((room, index) => ({ ...room, id: index }));

      if (remainingRooms.length === 0) {
        return [initialRoom];
      }

      return remainingRooms;
    }

    case 'increaseAdults': {
      if (action.payload?.adults === MAXIMUM_GUEST) {
        return state;
      }

      return state.map(room =>
        room.id === action.payload?.id
          ? {
              ...room,
              adults: room.adults + 1,
            }
          : room
      );
    }

    case 'decreaseAdults': {
      if (action.payload?.adults === MINIMAL_GUEST) {
        return state;
      }

      return state.map(room =>
        room.id === action.payload?.id
          ? {
              ...room,
              adults: room.adults - 1,
            }
          : room
      );
    }

    case 'increaseChildren': {
      if (action.payload?.children === MAXIMUM_GUEST) {
        return state;
      }

      return state.map(room =>
        room.id === action.payload?.id
          ? {
              ...room,
              children: room.children + 1,
            }
          : room
      );
    }

    case 'decreaseChildren': {
      if (action.payload?.children === MINIMAL_GUEST_CHILDREN) {
        return state;
      }

      return state.map(room =>
        room.id === action.payload?.id
          ? {
              ...room,
              children: room.children - 1,
            }
          : room
      );
    }

    default:
      return state;
  }
};

export function GuestProvider() {
  const [rooms, dispatch] = useReducer(manageRoom, [initialRoom]);

  return (
    <GuestContext.Provider value={{ rooms, dispatch }}>
      <Card className={cn('w-[348px] p-4')}>
        <div className="space-y-4">
          {rooms.map(room => (
            <RoomSection key={room.id} room={room} />
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
            <Button className="w-full" onClick={() => null}>
              Salvar
            </Button>
          </div>
        </div>
      </Card>
    </GuestContext.Provider>
  );
}

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error('useGuest deve ser usado dentro de um GuestProvider');
  }
  return context;
}
