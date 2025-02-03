import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader } from '@/components';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { HabitFormData, remindersDays, ReminderValue } from '@/types/habits';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { useFormContext } from 'react-hook-form';
import { useReminderDays } from '@/hooks/useReminderDays';

export function Reminder() {
  const { s, theme } = useTheme(styles);
  const { t } = useTranslation();
  const { setValue, watch } = useFormContext<HabitFormData>();
  const reminder = watch('reminder');
  const list = useReminderDays();

  const onPress = (day: ReminderValue) => {
    if (reminder.includes(day)) {
      setValue(
        'reminder',
        reminder.filter((item) => item !== day)
      );
    } else {
      setValue('reminder', [...reminder, day]);
    }
  };

  const isSelectedAll = reminder.length === 7;
  const handleSelectAll = () => {
    if (isSelectedAll) {
      setValue('reminder', []);
    } else {
      setValue(
        'reminder',
        list.map((item) => item.id)
      );
    }
  };

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title={'Reminder'} />
      <View style={s.content}>
        <Text style={s.formLabel}>{'Days'}</Text>
        <View style={s.list}>
          {list.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[s.dayButton, reminder.includes(item.id) ? s.dayButtonSelected : null]}
              onPress={() => onPress(item.id)}
            >
              <Text style={s.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={s.selectAllView}>
          <Button mode="text" onPress={handleSelectAll}>
            {isSelectedAll ? 'Unselect all' : 'Select all'}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
