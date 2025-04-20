import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
}

export const ModalHeader = ({ title }: Props) => {
  const isPresented = router.canGoBack();
  const { s, theme } = useTheme(styles);
  return (
    <View style={s.header}>
      {isPresented && (
        <Link href="../">
          <Ionicons name="close-outline" size={40} color={theme.colors.onBackground} />
        </Link>
      )}
      <Text style={s.title}>{title}</Text>
    </View>
  );
};
