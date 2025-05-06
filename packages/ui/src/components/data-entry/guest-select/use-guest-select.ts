import { useReducer } from 'react';

export interface Room {
  id: number;
  adults: number;
  children: number;
}

export interface Action {
  type:
    | 'addRoom'
    | 'removeRoom'
    | 'increaseAdults'
    | 'decreaseAdults'
    | 'increaseChildren'
    | 'decreaseChildren';
  payload?: Room;
}

const initialRoom = {
  id: 0,
  adults: 1,
  children: 0,
};

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

export const useGuestSelect = () => {
  const [rooms, dispatch] = useReducer(manageRoom, [initialRoom]);

  return { rooms, dispatch };
};
