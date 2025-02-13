import { Text, TextProps } from '@workspace/ui/components';

export const HeadingText = ({ children }: TextProps) => {
  return <Text className='mt-2'>{children}</Text>;
};
