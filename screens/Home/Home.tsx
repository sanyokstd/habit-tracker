import { HabitList, Header } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';

export function Home() {
  const { s } = useTheme(styles);
  return (
    <View style={s.screen}>
      <HabitList headerComponent={<Header />} />
    </View>
  );
}
