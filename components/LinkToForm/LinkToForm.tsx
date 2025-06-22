import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { SafeTouchableOpacity } from '../SafeTouchableOpacity/SafeTouchableOpacity';

interface Props {
  label: string;
  value: string;
  onPress: () => void;
}

export const LinkToForm = ({ label, value, onPress }: Props) => {
  const { s, theme } = useTheme(styles);
  return (
    <View style={s.wrap}>
      <Text style={s.label}>{label}</Text>
      <SafeTouchableOpacity onPress={onPress} style={s.link}>
        <Text style={s.text}>{value}</Text>
        <Ionicons name="chevron-forward-outline" size={24} color={theme.colors.onBackground} />
      </SafeTouchableOpacity>
    </View>
  );
};
