import { IoniconName } from '@/constants/iconNames';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

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
      <Ionicons name={iconName} size={30} color={iconColor} />
    </TouchableOpacity>
  );
};
