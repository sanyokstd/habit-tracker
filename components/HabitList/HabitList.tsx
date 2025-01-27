import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from './ListItem';
import { IHabit } from '@/types/habits';
import { colors, colorsLight } from '@/constants/colors';

const data: IHabit[] = [
  {
    id: 1,
    name: 'У мене немає звичків У мене немає звичків',
    description: 'У мене немає звичків У мене немає звичків У мене немає звичків',
    color: colors.yellow,
    colorLight: colorsLight.yellowLight,
    passedDays: [
      '2025-01-27',
      '2025-01-20',
      '2025-01-19',
      '2025-01-18',
      '2025-01-17',
      '2025-01-16',
      '2025-01-15',
      '2025-01-14',
      '2025-01-13',
      '2025-01-12',
      '2025-01-11',
      '2025-01-10',
      '2025-01-09',
      '2025-01-08',
      '2025-01-07',
      '2025-01-06',
      '2025-01-05',
      '2025-01-04',
      '2025-01-03',
      '2025-01-02',
      '2025-01-01',
    ],
  },
  {
    id: 2,
    name: 'У мене немає звичків 2 У мене немає звичків',
    description: 'У мене немає звичків 2 У мене немає звичків У мене немає звичків',
    color: colors.green,
    colorLight: colorsLight.greenLight,
    passedDays: [],
  },
];

export const HabitList = () => {
  return (
    <FlatList
      contentContainerStyle={s.list}
      keyExtractor={(item) => String(item.id)}
      data={data}
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
