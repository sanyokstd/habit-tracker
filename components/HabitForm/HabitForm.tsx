import { ColorChip } from '../ColorChip/ColorChip';
import { IconChip } from '../IconChip/IconChip';
import { LinkToForm } from '../LinkToForm/LinkToForm';
import { habitIconNames } from '@/constants/iconNames';
import { useReminderDays } from '@/hooks/useReminderDays';
import { useTheme } from '@/hooks/useTheme';
import { colors, IHabit } from '@/types/habits';
import { useRouter } from 'expo-router';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';

interface HabitFormProps {
  goalRoute: string;
}

export const HabitForm: React.FC<HabitFormProps> = ({ goalRoute }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { s, theme } = useTheme(styles);
  const { control, setValue, watch } = useFormContext<IHabit>();
  const goal = watch('goal');
  const reminder = watch('reminder');
  const reminderList = useReminderDays(reminder);
  const reminderDays =
    reminderList.length === 0
      ? t('NewHabit.none')
      : reminderList.map((item) => item.title).join(', ');

  return (
    <ScrollView contentContainerStyle={s.content}>
      <View style={s.formBlock}>
        <Text style={s.formLabel}>{t('NewHabit.name')}</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              outlineColor={theme.colors.onBackground}
              mode="outlined"
              value={value}
              onChangeText={onChange}
              maxLength={50}
            />
          )}
        />
      </View>
      <View style={s.formBlock}>
        <Text style={s.formLabel}>{t('NewHabit.desc')}</Text>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextInput
              outlineColor={theme.colors.onBackground}
              mode="outlined"
              value={value}
              onChangeText={onChange}
              maxLength={150}
            />
          )}
        />
      </View>
      <View style={s.formBlock}>
        <LinkToForm
          label={t('NewHabit.goal')}
          value={goal === 0 ? t('NewHabit.none') : `${goal} ${t('NewHabit.days')}`}
          onPress={() => router.push(goalRoute as any)}
        />
      </View>

      {/* <LinkToForm
          label={t('NewHabit.reminder')}
          value={reminderDays}
          onPress={() => router.push('/new-habit/reminder')}
        /> */}
      <View style={s.formBlock}>
        <Text style={s.formLabel}>{t('NewHabit.icon')}</Text>
        <View style={s.list}>
          {habitIconNames.map((item) => (
            <IconChip
              key={item}
              iconName={item}
              isSelected={watch('icon') === item}
              onPress={() => setValue('icon', item)}
            />
          ))}
        </View>
      </View>
      <View style={s.formBlock}>
        <Text style={s.formLabel}>{t('NewHabit.color')}</Text>
        <View style={s.list}>
          {Object.values(colors).map((item) => (
            <ColorChip
              key={item}
              color={item}
              isSelected={watch('color') === item}
              onPress={() => setValue('color', item)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
