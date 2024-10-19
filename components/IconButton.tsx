import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { useColorScheme } from 'nativewind';

const StyledPressable = styled(Pressable);

interface IconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function IconButton({
  iconName,
  iconSize = 24,
  iconColor,
  onPress,
  style,
}: IconButtonProps) {
  const { colorScheme } = useColorScheme();
  const defaultIconColor = colorScheme === 'light' ? 'black' : 'white';
  return (
    <StyledPressable
      onPress={onPress}
      style={style}
      className="p-2 rounded-full active:bg-gray-200"
    >
      <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor || defaultIconColor}
      />
    </StyledPressable>
  );
}
