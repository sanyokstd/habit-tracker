import { HabitList, Header } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
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
