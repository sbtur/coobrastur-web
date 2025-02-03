import {
  Button as ButtonComp,
  ButtonProps,
} from '@workspace/ui/components/ui/button';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonComp {...props}>{children}</ButtonComp>;
};

export default Button;
