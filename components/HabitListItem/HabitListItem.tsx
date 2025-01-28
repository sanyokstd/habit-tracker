import { IHabit } from '@/types/habits';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { HabitDaysCalendar } from '../HabitDaysCalendar/HabitDaysCalendar';
import { HabitCheckbox } from '../HabitCheckbox/HabitCheckbox';
import { styles } from '../HabitListItem/styles';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';

export const HabitListItem = ({ item }: { item: IHabit }) => {
  const { s, theme } = useTheme(styles);
  const [checked, setChecked] = useState(false);
  const handleCheckboxPress = () => {
    setChecked(!checked);
  };

  return (
    <View style={s.item}>
      <View style={s.topRow}>
        <View style={[s.icon, { backgroundColor: item.colorLight }]}>
          <Ionicons name="alarm-outline" size={24} color={theme.colors.onBackground} />
        </View>
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
