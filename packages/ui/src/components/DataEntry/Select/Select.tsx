import { cn } from '@ui/lib/utils';
import { ChevronDown } from '@ui/lib/icons';

export interface SelectProps {
  children: React.ReactNode;
  className?: string;
  // outras props necessárias
}

export const Select = ({ children, className, ...props }: SelectProps) => {
  return (
    <div className="relative">
      <select
        className={cn(
          'w-full rounded-md border border-gray-200 p-2 bg-gray-50 text-gray-500 appearance-none',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 h-4 w-4" />
    </div>
  );
};
