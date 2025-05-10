import { Badge } from '@coobrastur/ui/components/data-display/badge';

interface DaysBadgeProps {
  days: number;
  validity: {
    start: string;
    end: string;
  };
  badges: {
    type: 'warning' | 'neutral';
    label: string;
  }[];
}

export const DaysBadge = ({ days, validity, badges }: DaysBadgeProps) => {
  return (
    <>
      <div className="space-x-2">
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.type}>
            {badge.label}
          </Badge>
        ))}
      </div>

      <div className="mb-1">
        <p className="font-primary font-bold text-lg text-white">
          {days} Diárias
        </p>
        <p className="font-primary text-xs text-white">
          Validade: {validity.start} a {validity.end}
        </p>
      </div>
    </>
  );
};
