import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from './ListItem';
import { IHabit } from '@/types/habits';
import { colors, colorsLight } from '@/constants/colors';

const data: IHabit[] = [
  {
    id: 1,
    name: 'У мене немає звичків У мене немає звичків',
    description:
      'У мене немає звичків У мене немає звичків У мене немає звичків',
    color: colors.yellow,
    colorLight: colorsLight.yellowLight,
    passedDays: [],
  },
];

export const HabitList = () => {
  return (
    <FlatList
      contentContainerStyle={s.list}
      keyExtractor={(item) => String(item.id)}
      data={[...data, ...data, ...data, ...data, ...data, ...data, ...data]}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  );
};

const s = StyleSheet.create({
  list: {
    gap: 10,
    padding: 15,
    paddingBottom: 50,
  },
});
