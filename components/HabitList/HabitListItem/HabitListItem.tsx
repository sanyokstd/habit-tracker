import { useTheme } from '@/hooks/useTheme';
import { IHabit } from '@/types/habits';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { HabitCheckbox } from '../HabitCheckbox/HabitCheckbox';
import { HabitDaysCalendar } from '../HabitDaysCalendar/HabitDaysCalendar';
import { styles } from '../HabitListItem/styles';

export const HabitListItem = ({ item }: { item: IHabit }) => {
  const { t } = useTranslation();
  const { s, theme } = useTheme(styles);
  const [checked, setChecked] = useState(false);
  const handleCheckboxPress = () => {
    setChecked(!checked);
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
        <HabitCheckbox checked={checked} handlePress={handleCheckboxPress} color={item.color} />
      </View>

      <HabitDaysCalendar color={item.color} activeDates={item.passedDays} />
      {item.goal ? (
        <View style={s.goal}>
          <Text style={s.goalText}>{t('HabitListItem.goal')}: </Text>
          <Text style={s.goalText}>
            {item.goalPassed} / {item.goal}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
