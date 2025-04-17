import { Button } from '@coobrastur/ui/components/data-entry/button'
import { Card } from '@coobrastur/ui/components/data-display/card'
import { Minus, Plus, PlusCircle } from 'lucide-react'
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
      disabled={isDisabled}
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
        <Text className="font-bold font-primary text-lg text-primary-300">{option.value}</Text>
        <CounterButton
          icon="plus"
          isDisabled={option.value >= option.max}
          onClick={handleIncrement}
        />
      </div>
    </div>
  )
}

interface GuestSelectProps {
  roomNumber: number
  onAddRoom: () => void
  onSave: () => void
  className?: string
}

export function GuestSelect({
  roomNumber,
  onAddRoom,
  onSave,
  className,
}: GuestSelectProps) {
  const [adults, setAdults] = useState<GuestOption>({
    value: 1,
    min: 1,
    max: 10,
    label: 'Adultos',
    description: 'Maiores 18 anos',
  })

  const [children, setChildren] = useState<GuestOption>({
    value: 1,
    min: 0,
    max: 10,
    label: 'Crianças',
    description: 'Até 17 anos',
  })

  return (
    <Card className={cn('w-[348px] p-4', className)}>
      <div className="space-y-6">
        <div className="space-y-4">
          <Badge variant="default" className="bg-blue-50 p-2 text-xs font-bold">
            QUARTO {roomNumber}
          </Badge>

          <div className="space-y-4">
            <GuestCounter 
              option={adults} 
              onValueChange={(value) => setAdults({ ...adults, value })}
              minValue={1}
            />
            <GuestCounter 
              option={children} 
              onValueChange={(value) => setChildren({ ...children, value })}
              minValue={0}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-[160px] h-[30px] text-[10px]"
            onClick={onAddRoom}
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