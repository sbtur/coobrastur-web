import {
  Button as ButtonComp,
  ButtonProps,
} from '@workspace/ui/components/button';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonComp {...props}>{children}</ButtonComp>;
};
