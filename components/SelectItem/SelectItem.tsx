import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';

interface Props {
  onPress: () => void;
  isActive: boolean;
  title: string;
  withDivider?: boolean;
}

export const SelectItem = ({ onPress, isActive, title, withDivider = true }: Props) => {
  const { s, theme } = useTheme(styles);
  return (
    <TouchableOpacity onPress={onPress} style={[s.item, { borderBottomWidth: withDivider ? 1 : 0 }]}>
      <Text style={s.title}>{title}</Text>
      <View style={s.iconContainer}>
        <Ionicons
          name="checkmark-circle-outline"
          size={24}
          color={theme.colors.onBackground}
          style={{ opacity: isActive ? 1 : 0 }}
        />
      </View>
    </TouchableOpacity>
  );
};
