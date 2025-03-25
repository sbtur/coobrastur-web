import { ButtonProps } from '@ui/components/button';
import { Button } from '@ui/components/DataEntry/Button';
import { Link, LinkProps } from '@ui/components/DataEntry/Link';

type BaseProps = {
  children: React.ReactNode;
  type: 'link' | 'button';
};

type HotelButtonProps = BaseProps &
  (
    | (Omit<LinkProps, keyof BaseProps> & { type: 'link' })
    | (Omit<ButtonProps, keyof BaseProps> & { type: 'button' })
  );

export const HotelButton = ({
  children,
  type = 'button',
  ...props
}: HotelButtonProps) => {
  if (type === 'link') {
    return <Link {...(props as LinkProps)}>{children}</Link>;
  }

  return (
    <Button variant="link" {...(props as ButtonProps)}>
      {children}
    </Button>
  );
};
