import { useTheme } from '@/hooks/useTheme';
import { HabitColor } from '@/types/habits';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity, useColorScheme } from 'react-native';
import { styles } from './styles';

interface HabitCheckboxProps {
  checked: boolean;
  handlePress: () => void;
  color: HabitColor;
}

export const HabitCheckbox = ({ checked, handlePress, color }: HabitCheckboxProps) => {
  const { s, theme } = useTheme(styles);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colorForDark = checked ? theme.colors.onBackground : theme.colors.onBackground;
  const colorForLight = checked ? '#fff' : theme.colors.onBackground;

  return (
    <TouchableOpacity
      style={[s.checkbox, { backgroundColor: checked ? color : color + '4D' }]}
      onPress={() => {
        Haptics.impactAsync();
        handlePress();
      }}
    >
      <Ionicons name="checkmark-sharp" size={24} color={isDark ? colorForDark : colorForLight} />
    </TouchableOpacity>
  );
};
