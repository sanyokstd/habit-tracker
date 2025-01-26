import { View, StyleSheet } from 'react-native';
import { HabitList } from '@/components';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <HabitList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
