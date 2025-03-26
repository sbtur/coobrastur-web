import { ButtonProps } from '@ui/components/button';
import { Button } from '@ui/components/DataEntry/Button';
import { Link, LinkProps } from '@ui/components/DataEntry/Link';
import { cn } from '@ui/lib/utils';

type BaseProps = {
  children: React.ReactNode;
  type: 'Default' | 'button';
  variant?: ButtonProps['variant'];
  className?: string;
  disabled?: boolean;
  disabledClassName?: string;
};

type PlanningButtonProps = BaseProps &
  (
    | (Omit<LinkProps, keyof BaseProps> & { type: 'Default' })
    | (Omit<ButtonProps, keyof BaseProps> & { type: 'button' })
  );

export const PlanningButton = ({
  children,
  type = 'button',
  variant = 'default',
  className,
  disabled,
  disabledClassName,
  ...props
}: PlanningButtonProps) => {
  if (type === 'Default') {
    return (
      <Link className={className} {...(props as LinkProps)}>
        {children}
      </Link>
    );
  }

  const buttonVariant = disabled ? undefined : variant;

  return (
    <Button
      variant={buttonVariant}
      className={cn(className, disabled && disabledClassName)}
      disabled={disabled}
      {...(props as ButtonProps)}
    >
      {children}
    </Button>
  );
};
