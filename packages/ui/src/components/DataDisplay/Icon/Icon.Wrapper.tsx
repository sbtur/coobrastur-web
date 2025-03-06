import { cn } from '@workspace/ui/lib/utils';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonWrapperProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
  };

type DivWrapperProps = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: 'div';
  };

export type IconWrapperProps = ButtonWrapperProps | DivWrapperProps;

export const IconWrapper = ({
  children,
  className,
  as = 'div',
  ...props
}: IconWrapperProps) => {
  const Component = as;

  return (
    <Component
      className={cn(
        'w-fit h-fit p-3 flex items-center justify-center appearance-none border-0 rounded-full bg-white transition-colors shadow-xl text-xs text-text',
        className,
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
