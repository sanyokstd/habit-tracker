import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const data = [
  { name: 'У мене немає звичків', icon: 'folder', onPress: () => {} },
  { name: 'Звички', icon: 'folder', onPress: () => {} },
  { name: 'Статистика', icon: 'bar-chart', onPress: () => {} },
  { name: 'Блог', icon: 'book', onPress: () => {} },
  { name: 'У мене немає звичків', icon: 'folder', onPress: () => {} },
  { name: 'Звички', icon: 'folder', onPress: () => {} },
  { name: 'Статистика', icon: 'bar-chart', onPress: () => {} },
  { name: 'Блог', icon: 'book', onPress: () => {} },
  { name: 'У мене немає звичків', icon: 'folder', onPress: () => {} },
  { name: 'Звички', icon: 'folder', onPress: () => {} },
  { name: 'Статистика', icon: 'bar-chart', onPress: () => {} },
  { name: 'Блог', icon: 'book', onPress: () => {} },
  { name: 'У мене немає звичків', icon: 'folder', onPress: () => {} },
  { name: 'Звички', icon: 'folder', onPress: () => {} },
  { name: 'Статистика', icon: 'bar-chart', onPress: () => {} },
  { name: 'Блог', icon: 'book', onPress: () => {} },
  { name: 'У мене немає звичків', icon: 'folder', onPress: () => {} },
  { name: 'Звички', icon: 'folder', onPress: () => {} },
  { name: 'Статистика', icon: 'bar-chart', onPress: () => {} },
  { name: 'Блог', icon: 'book', onPress: () => {} },
];

const Item = ({ item }: { item: any }) => {
  return (
    <View style={styles.item}>
      <Avatar.Icon size={24} icon={item.icon} />
      <Text style={styles.text}>{item.name}</Text>
      <IconButton icon="plus" size={24} onPress={item.onPress} />
    </View>
  );
};

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <FlatList data={data} renderItem={({ item }) => <Item item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontFamily: 'RobotoRegular',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
