import { View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Link, router } from 'expo-router';

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
          <Ionicons name="close-outline" size={30} color={theme.colors.onBackground} />
        </Link>
      )}
      <Text style={s.title}>{title}</Text>
    </View>
  );
};
