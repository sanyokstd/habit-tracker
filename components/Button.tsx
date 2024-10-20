import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

interface buttonClasses {
  size: ButtonSize;
  fullWidth: boolean;
  disabled?: boolean;
}

const getButtonClasses = ({ size, fullWidth, disabled }: buttonClasses) => {
  let buttonClasses = 'rounded-2xl px-2 text-white bg-green-600';
  let textClasses = 'text-white font-bold text-center';
  if (fullWidth) {
    buttonClasses += ' w-full';
  } else {
    buttonClasses += ' w-auto';
  }

  if (disabled) {
    buttonClasses += ' opacity-50';
  }

  switch (size) {
    case 'small':
      textClasses += ' text-sm';
      buttonClasses += ' py-2';
      break;
    case 'large':
      textClasses += ' text-lg';
      buttonClasses += ' py-4';
      break;
    case 'medium':
    default:
      textClasses += ' text-base';
      buttonClasses += ' py-3';
      break;
  }

  return { buttonClasses, textClasses };
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className,
}) => {
  const { buttonClasses, textClasses } = getButtonClasses({
    size,
    fullWidth,
    disabled,
  });

  return (
    <TouchableOpacity
      className={buttonClasses + ' ' + className}
      onPress={disabled ? () => {} : onPress}
    >
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
