import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HabitColor, HabitColorLight } from '@/types/habits';

interface HabitCheckboxProps {
  checked: boolean;
  handlePress: () => void;
  color: HabitColor;
  colorLight: HabitColorLight;
}

export const HabitCheckbox = ({
  checked,
  handlePress,
  color,
  colorLight,
}: HabitCheckboxProps) => {
  return (
    <TouchableOpacity
      style={[s.checkbox, { backgroundColor: checked ? color : colorLight }]}
      onPress={handlePress}
    >
      <Ionicons
        name="checkmark-sharp"
        size={24}
        color={checked ? '#fff' : '#000'}
      />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  checkbox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
