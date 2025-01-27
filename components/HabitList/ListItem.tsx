import { IHabit } from '@/types/habits';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HabitCheckbox, HabitDaysCalendar } from '@/components';
import { useState } from 'react';

export const ListItem = ({ item }: { item: IHabit }) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxPress = () => {
    setChecked(!checked);
  };

  return (
    <View style={s.item}>
      <View style={s.topRow}>
        <View style={[s.icon, { backgroundColor: item.colorLight }]}></View>
        <View style={s.infoBlock}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={s.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={s.description}>
            {item.description}
          </Text>
        </View>
        <HabitCheckbox
          checked={checked}
          handlePress={handleCheckboxPress}
          color={item.color}
          colorLight={item.colorLight}
        />
      </View>
      <HabitDaysCalendar color={item.color} colorLight={item.colorLight} activeDates={item.passedDays} />
    </View>
  );
};

const s = StyleSheet.create({
  item: {
    padding: 10,
    paddingBottom: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    gap: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  infoBlock: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'RobotoRegular',
  },
  description: {
    fontSize: 15,
    color: '#000',
  },
  calendar: {
    flexDirection: 'row-reverse',
    gap: 4,
    overflowX: 'scroll',
    paddingBottom: 10,
  },
  calendarColumn: {
    flexDirection: 'column',
    gap: 4,
  },
  calendarDay: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
});
