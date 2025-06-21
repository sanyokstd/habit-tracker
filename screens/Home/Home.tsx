import { HabitList, Header } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';
import { styles } from './styles';

export function Home() {
  const { s } = useTheme(styles);

  return (
    <View style={s.screen}>
      <HabitList headerComponent={<Header />} />
    </View>
  );
}
