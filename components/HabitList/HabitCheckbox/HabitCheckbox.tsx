import { TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HabitColor, HabitColorLight } from '@/types/habits';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';

interface HabitCheckboxProps {
  checked: boolean;
  handlePress: () => void;
  color: HabitColor;
  colorLight: HabitColorLight;
}

export const HabitCheckbox = ({ checked, handlePress, color, colorLight }: HabitCheckboxProps) => {
  const { s, theme } = useTheme(styles);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colorForDark = checked ? theme.colors.onBackground : theme.colors.onBackground;
  const colorForLight = checked ? '#fff' : theme.colors.onBackground;

  return (
    <TouchableOpacity style={[s.checkbox, { backgroundColor: checked ? color : colorLight }]} onPress={handlePress}>
      <Ionicons name="checkmark-sharp" size={24} color={isDark ? colorForDark : colorForLight} />
    </TouchableOpacity>
  );
};
