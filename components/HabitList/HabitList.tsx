import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useHabitStore } from '@/store/habitStore';
import { AddFirstHabit } from './AddFirstHabit/AddFirstHabit';
import { HabitListItem } from './HabitListItem/HabitListItem';
import { JSX } from 'react';

interface Props {
  headerComponent: JSX.Element;
}

export const HabitList = ({ headerComponent }: Props) => {
  const { habits } = useHabitStore();
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      ListHeaderComponent={headerComponent}
      data={habits}
      renderItem={({ item }) => <HabitListItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[s.list, { paddingTop: insets.top }]}
      ListEmptyComponent={<AddFirstHabit />}
    />
  );
};

const s = StyleSheet.create({
  list: {
    gap: 10,
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
});
