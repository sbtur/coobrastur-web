import { CircleCheckBig } from 'lucide-react';

import { Card } from '@ui/components/data-display/card';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Card className="flex flex-col gap-4 relative p-10">
      <CircleCheckBig className="absolute top-4 right-4 w-5 h-5 text-green-600" />
      {children}
    </Card>
  );
}
