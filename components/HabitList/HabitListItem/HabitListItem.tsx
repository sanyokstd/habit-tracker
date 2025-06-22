import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/store/habitStore';
import { IHabit } from '@/types/habits';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { HabitCalendar } from '../../HabitCalendar/HabitCalendar';
import { HabitCheckbox } from '../HabitCheckbox/HabitCheckbox';
import { SafeTouchableOpacity } from '../../SafeTouchableOpacity/SafeTouchableOpacity';
import { styles } from '../HabitListItem/styles';
import { useRouter } from 'expo-router';

export const HabitListItem = ({ item }: { item: IHabit }) => {
  const { checkHabitDay } = useHabitStore();
  const { t } = useTranslation();
  const { s, theme } = useTheme(styles);
  const router = useRouter();
  const today = format(new Date(), 'yyyy-MM-dd');

  const [checked, setChecked] = useState(item.passedDays.includes(today));

  useEffect(() => {
    setChecked(item.passedDays.includes(today));
  }, [item.passedDays, today]);

  const handleCheckboxPress = () => {
    checkHabitDay(item.id, today);
    setChecked(!checked);
  };

  const handleDayPress = (habitId: number, date: string) => {
    checkHabitDay(habitId, date);
  };

  const handleEdit = () => {
    router.push(`/edit-habit?id=${item.id}`);
  };

  return (
    <View style={s.item}>
      <View style={s.topRow}>
        <View style={[s.icon, { backgroundColor: item.color + '4D' }]}>
          <Ionicons name={item.icon} size={24} color={theme.colors.onBackground} />
        </View>
        <View style={s.infoBlock}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={s.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={s.description}>
            {item.description}
          </Text>
        </View>
        <SafeTouchableOpacity onPress={handleEdit} style={s.editButton}>
          <Ionicons name="settings-outline" size={24} color={theme.colors.onBackground} />
        </SafeTouchableOpacity>
        <HabitCheckbox checked={checked} handlePress={handleCheckboxPress} color={item.color} />
      </View>

      <HabitCalendar habit={item} onDayPress={handleDayPress} />

      {item.goal ? (
        <View style={s.goal}>
          <Text style={s.goalText}>{t('HabitListItem.goal')}: </Text>
          <Text style={s.goalText}>
            {item.passedDays.length} / {item.goal}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
