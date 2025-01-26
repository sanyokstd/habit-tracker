import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { ListItem } from './ListItem';
import { IHabit } from '@/types/habits';

const data: IHabit[] = [
  {
    id: 1,
    name: 'У мене немає звичків',
    description: 'У мене немає звичків',
  },
  {
    id: 2,
    name: 'Звички',
    description: 'Звички',
  },
  {
    id: 3,
    name: 'Статистика',
    description: 'Статистика',
  },
  {
    id: 4,
    name: 'Блог',
    description: 'Блог',
  },
  {
    id: 5,
    name: 'У мене немає звичків У мене немає звичків У мене немає звичків У мене немає звичків',
    description: 'У мене немає звичків',
  },
  {
    id: 6,
    name: 'Звички',
    description: 'Звички',
  },
  {
    id: 7,
    name: 'Статистика',
    description: 'Статистика',
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
  },
});
