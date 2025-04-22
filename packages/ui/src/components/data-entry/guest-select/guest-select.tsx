import { Button } from '@coobrastur/ui/components/data-entry/button'
import { Card } from '@coobrastur/ui/components/data-display/card'
import { Minus, Plus, PlusCircle, Trash } from 'lucide-react'
import { cn } from '@coobrastur/ui/lib/utils'
import { Text } from '@coobrastur/ui/components/data-display/text'
import { Badge } from '@coobrastur/ui/components/data-display/badge'
import { useState } from 'react'

interface GuestOption {
  value: number
  min: number
  max: number
  label: string
  description: string
}

interface Room {
  id: number
  adults: GuestOption
  children: GuestOption
}

interface CounterButtonProps {
  onClick: () => void
  isDisabled: boolean
  icon: 'plus' | 'minus'
}

function CounterButton({ onClick, isDisabled, icon }: CounterButtonProps) {
  const Icon = icon === 'plus' ? Plus : Minus

  return (
    <Button
      className={cn(
        "border border-gray-300 rounded px-2 py-2 text-gray-300",
        isDisabled ? "bg-gray-100" : "bg-white text-primary-300"
      )}
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <Icon className="h-3 w-3" />
    </Button>
  )
}

interface GuestCounterProps {
  option: GuestOption
  onValueChange: (value: number) => void
  minValue: number
}

function GuestCounter({ option, onValueChange, minValue }: GuestCounterProps) {
  const handleIncrement = () => {
    if (option.value < option.max) {
      onValueChange(option.value + 1)
    }
  }

  const handleDecrement = () => {
    if (option.value > minValue) {
      onValueChange(option.value - 1)
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="max-w-[180px] pr-4">
        <Text className="font-bold font-primary text-2xl text-primary-300">{option.label}</Text>
        <Text className="text-neutral-400 text-sm">{option.description}</Text>
      </div>
      <div className="flex items-center gap-6">
        <CounterButton
          icon="minus"
          isDisabled={option.value <= minValue}
          onClick={handleDecrement}
        />
        <Text className="font-bold font-primary text-lg text-primary-300 min-w-[14px]">{option.value}</Text>
        <CounterButton
          icon="plus"
          isDisabled={option.value >= option.max}
          onClick={handleIncrement}
        />
      </div>
    </div>
  )
}

interface RoomSectionProps {
  room: Room
  onUpdateRoom: (roomId: number, updates: Partial<Room>) => void
  onRemoveRoom: (roomId: number) => void
}

function RoomSection({ room, onUpdateRoom, onRemoveRoom }: RoomSectionProps) {
  return (
    <div className="space-y-4 border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between">
        <Badge variant="default" className="bg-blue-50 p-2 text-xs font-bold">
          QUARTO {room.id + 1}
        </Badge>

        {room.id > 0 && (
          <button 
            onClick={() => onRemoveRoom(room.id)}
            className="flex items-center gap-1 text-neutral-400 text-xs hover:text-neutral-600"
          >        
            Remover <Trash className="h-3 w-3" />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <GuestCounter 
          option={room.adults} 
          onValueChange={(value) => onUpdateRoom(room.id, { adults: { ...room.adults, value } })}
          minValue={1}
        />
        <GuestCounter 
          option={room.children} 
          onValueChange={(value) => onUpdateRoom(room.id, { children: { ...room.children, value } })}
          minValue={0}
        />
      </div>
    </div>
  )
}

interface GuestSelectProps {
  onSave: () => void
  className?: string
}

export function GuestSelect({
  onSave,
  className,
}: GuestSelectProps) {
  const [rooms, setRooms] = useState<Room[]>([{
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
    }
  }])

  const handleAddRoom = () => {
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
        }
      }
    ])
  }

  const handleRemoveRoom = (roomId: number) => {
    setRooms(currentRooms => 
      currentRooms
        .filter(room => room.id !== roomId)
        .map((room, index) => ({ ...room, id: index }))
    )
  }

  const handleUpdateRoom = (roomId: number, updates: Partial<Room>) => {
    setRooms(currentRooms => 
      currentRooms.map(room => 
        room.id === roomId ? { ...room, ...updates } : room
      )
    )
  }

  return (
    <Card className={cn('w-[348px] p-4', className)}>
      <div className="space-y-4">
        {rooms.map(room => (
          <RoomSection 
            key={room.id} 
            room={room} 
            onUpdateRoom={handleUpdateRoom}
            onRemoveRoom={handleRemoveRoom}
          />
        ))}

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-[160px] h-[30px] text-[10px] flex items-center"
            onClick={handleAddRoom}
          >
            <PlusCircle className="h-3 w-3" />
            ADICIONAR QUARTO
          </Button>
          <Button
            className="w-full"
            onClick={onSave}
          >
            Salvar
          </Button>
        </div>
      </div>
    </Card>
  )
} 