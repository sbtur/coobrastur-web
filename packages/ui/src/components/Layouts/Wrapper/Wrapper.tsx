import { cn } from '@workspace/ui/lib/utils';

interface WrapperProps extends React.PropsWithChildren {
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn('w-full h-full', className)}>{children}</div>;
};
