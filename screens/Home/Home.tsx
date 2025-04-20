import { HabitList, Header } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/store/habitStore';
import { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export function Home() {
  const { s } = useTheme(styles);
  const { clear } = useHabitStore();
  useEffect(() => {
    // clear();
  }, []);

  return (
    <View style={s.screen}>
      <HabitList headerComponent={<Header />} />
    </View>
  );
}
