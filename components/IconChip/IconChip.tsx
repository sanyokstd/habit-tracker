import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IoniconName } from '@/constants/iconNames';

interface Props {
  onPress: () => void;
  iconName: IoniconName;
  isSelected: boolean;
}

export const IconChip = ({ onPress, iconName, isSelected }: Props) => {
  const { s, theme } = useTheme(styles);
  const iconColor = isSelected ? '#fff' : theme.colors.onBackground;
  return (
    <TouchableOpacity style={[s.iconButton, isSelected ? s.iconSelected : null]} onPress={onPress}>
      <Ionicons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};
