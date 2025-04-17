import { Button } from '@coobrastur/ui/components/data-entry/button'
import { Card } from '@coobrastur/ui/components/data-display/card'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@coobrastur/ui/lib/utils'

interface GuestOption {
  value: number
  min: number
  max: number
  label: string
  description: string
}

interface GuestSelectProps {
  roomNumber: number
  adults: GuestOption
  childrenGuests: GuestOption
  onAdultsChange: (value: number) => void
  onChildrenChange: (value: number) => void
  onAddRoom: () => void
  onSave: () => void
  className?: string
}

export function GuestSelect({
  roomNumber,
  adults,
  childrenGuests,
  onAdultsChange,
  onChildrenChange,
  onAddRoom,
  onSave,
  className,
}: GuestSelectProps) {
  return (
    <Card className={cn('w-full max-w-[320px] p-4', className)}>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-2 text-sm font-medium text-blue-900">
            QUARTO {roomNumber}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{adults.label}</p>
                <p className="text-sm text-gray-500">{adults.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={adults.value <= adults.min}
                  onClick={() => onAdultsChange(adults.value - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-4 text-center">{adults.value}</span>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={adults.value >= adults.max}
                  onClick={() => onAdultsChange(adults.value + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {childrenGuests.label}
                </p>
                <p className="text-sm text-gray-500">{childrenGuests.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={childrenGuests.value <= childrenGuests.min}
                  onClick={() => onChildrenChange(childrenGuests.value - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-4 text-center">{childrenGuests.value}</span>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={childrenGuests.value >= childrenGuests.max}
                  onClick={() => onChildrenChange(childrenGuests.value + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={onAddRoom}
          >
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