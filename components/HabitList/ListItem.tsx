import { IHabit } from '@/types/habits';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export const ListItem = ({ item }: { item: IHabit }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[s.item, { backgroundColor: 'rgba(4, 212, 100, 0.2)' }]}
    >
      <Text>{item.name}</Text>
      <View
        style={[
          s.progress,
          { backgroundColor: 'rgba(4, 212, 100, 1)', width: '50%' },
        ]}
      ></View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  progress: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    zIndex: -1,
    borderRadius: 10,
  },
});
