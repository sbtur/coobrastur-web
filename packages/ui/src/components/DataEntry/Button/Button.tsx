import {
  Button as ButtonComp,
  ButtonProps,
} from '@coobrastur/ui/components/button';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonComp {...props}>{children}</ButtonComp>;
};
