import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';
import { TouchableOpacity, View } from 'react-native';
import { HabitColorLight, HabitColor } from '@/types/habits';

interface Props {
  onPress: () => void;
  color: HabitColor | HabitColorLight;
  isSelected: boolean;
}

export const ColorChip = ({ onPress, color, isSelected }: Props) => {
  const { s } = useTheme(styles);
  return (
    <TouchableOpacity
      style={[s.chip, isSelected ? s.chipSelected : null, { backgroundColor: color }]}
      onPress={onPress}
    >
      {isSelected && <View style={s.selectedIcon}></View>}
    </TouchableOpacity>
  );
};
