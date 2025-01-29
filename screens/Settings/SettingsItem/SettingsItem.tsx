import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  iconBackColor: string;
  withDivider?: boolean;
}

export const SettingsItem = ({ title, icon, onPress, iconBackColor, withDivider = true }: Props) => {
  const { s, theme } = useTheme(styles);
  return (
    <TouchableOpacity style={[s.item, { borderBottomWidth: withDivider ? 1 : 0 }]} onPress={onPress}>
      <View style={[s.itemIconWrapper, { backgroundColor: iconBackColor }]}>{icon}</View>
      <Text style={s.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={s.arrowRight}>
        <Ionicons name="chevron-forward-outline" size={20} color={theme.colors.onBackground} />
      </View>
    </TouchableOpacity>
  );
};
