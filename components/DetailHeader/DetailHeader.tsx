import { View } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Link, router } from 'expo-router';

interface Props {
  title: string;
}

export const DetailHeader = ({ title }: Props) => {
  const isPresented = router.canGoBack();
  const { s, theme } = useTheme(styles);
  return (
    <View style={s.header}>
      {isPresented && (
        <Link href="../">
          <Ionicons name="chevron-back-outline" size={30} color={theme.colors.onBackground} />
        </Link>
      )}
      <Text style={s.title}>{title}</Text>
    </View>
  );
};
