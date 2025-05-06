import { Minus, Plus } from 'lucide-react';

import { Button } from '@ui/components/data-entry/button';
import { cn } from '@ui/lib/utils';

interface CounterButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  icon: 'plus' | 'minus';
}

export function CounterButton({
  onClick,
  isDisabled,
  icon,
}: CounterButtonProps) {
  const Icon = icon === 'plus' ? Plus : Minus;

  return (
    <Button
      className={cn(
        'border border-gray-300 rounded px-2 py-2 text-gray-300',
        isDisabled ? 'bg-gray-100' : 'bg-white text-primary-300'
      )}
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <Icon className="h-3 w-3" />
    </Button>
  );
}
