import { HabitList, Header } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { ScrollView } from 'react-native';

export function Home() {
  const { s } = useTheme(styles);
  return (
    <ScrollView style={s.screen}>
      <SafeAreaView style={s.area}>
        <Header />
        <HabitList />
      </SafeAreaView>
    </ScrollView>
  );
}
