import { createContext, ReactNode, useContext, useState } from 'react';

interface GuestOption {
  value: number;
  min: number;
  max: number;
  label: string;
  description: string;
}

interface Room {
  id: number;
  adults: GuestOption;
  children: GuestOption;
}

interface GuestContextData {
  rooms: Room[];
  addRoom: () => void;
  removeRoom: (roomId: number) => void;
  updateRoom: (roomId: number, updates: Partial<Room>) => void;
}

const GuestContext = createContext<GuestContextData | undefined>(undefined);

const initialRoom: Room = {
  id: 0,
  adults: {
    value: 1,
    min: 1,
    max: 10,
    label: 'Adultos',
    description: 'Maiores 18 anos',
  },
  children: {
    value: 1,
    min: 0,
    max: 10,
    label: 'Crianças',
    description: 'Até 17 anos',
  },
};

interface GuestProviderProps {
  children: ReactNode;
}

export function GuestProvider({ children }: GuestProviderProps) {
  const [rooms, setRooms] = useState<Room[]>([initialRoom]);

  const addRoom = () => {
    setRooms(currentRooms => [
      ...currentRooms,
      {
        id: currentRooms.length,
        adults: {
          value: 1,
          min: 1,
          max: 10,
          label: 'Adultos',
          description: 'Maiores 18 anos',
        },
        children: {
          value: 1,
          min: 0,
          max: 10,
          label: 'Crianças',
          description: 'Até 17 anos',
        },
      },
    ]);
  };

  const removeRoom = (roomId: number) => {
    setRooms(currentRooms =>
      currentRooms
        .filter(room => room.id !== roomId)
        .map((room, index) => ({ ...room, id: index }))
    );
  };

  const updateRoom = (roomId: number, updates: Partial<Room>) => {
    setRooms(currentRooms =>
      currentRooms.map(room =>
        room.id === roomId ? { ...room, ...updates } : room
      )
    );
  };

  return (
    <GuestContext.Provider value={{ rooms, addRoom, removeRoom, updateRoom }}>
      {children}
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
