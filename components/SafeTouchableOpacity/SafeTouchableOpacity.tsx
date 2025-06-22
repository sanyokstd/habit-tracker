import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { usePreventDoublePress } from '@/hooks/usePreventDoublePress';

interface SafeTouchableOpacityProps extends Omit<TouchableOpacityProps, 'onPress'> {
  onPress: () => void;
  delay?: number;
}

export const SafeTouchableOpacity: React.FC<SafeTouchableOpacityProps> = ({
  onPress,
  delay = 1000,
  style,
  disabled,
  ...props
}) => {
  const { isDisabled, preventDoublePress } = usePreventDoublePress(delay);

  const handlePress = () => {
    preventDoublePress(onPress);
  };

  return (
    <TouchableOpacity
      {...props}
      onPress={handlePress}
      style={[style, isDisabled && { opacity: 0.5 }]}
      disabled={disabled || isDisabled}
    />
  );
};
