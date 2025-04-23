import { Badge } from '@coobrastur/ui/components/data-display/badge';

export type BadgePlanValue = 'SILVER' | 'GOLD' | 'PLATINUM';

interface BadgePlanProps {
  planType: BadgePlanValue;
}

const planTypeColors = {
  SILVER: 'neutral',
  GOLD: 'warning',
  PLATINUM: 'default',
} as const;

export function BadgePlan({ planType }: BadgePlanProps) {
  return (
    <div className="flex items-center gap-2">
      <Badge variant={planTypeColors[planType]}>{planType}</Badge>
    </div>
  );
}
