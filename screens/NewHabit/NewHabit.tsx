import { BottomGradient, ColorChip, IconChip, LinkToForm, ModalHeader } from '@/components';
import { habitIconNames } from '@/constants/iconNames';
import { useReminderDays } from '@/hooks/useReminderDays';
import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/store/habitStore';
import { colors, IHabit } from '@/types/habits';
import { useRouter } from 'expo-router';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

export const NewHabit: React.FC = () => {
  const { addHabit } = useHabitStore();
  const { t } = useTranslation();
  const router = useRouter();
  const { s, theme } = useTheme(styles);
  const insets = useSafeAreaInsets();
  const { control, handleSubmit, setValue, watch } = useFormContext<IHabit>();
  const name = watch('name');
  const goal = watch('goal');
  const reminder = watch('reminder');
  const reminderList = useReminderDays(reminder);
  const reminderDays =
    reminderList.length === 0
      ? t('NewHabit.none')
      : reminderList.map((item) => item.title).join(', ');

  const onSubmit = (data: IHabit) => {
    addHabit(data);
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={s.keyboard}
    >
      <View style={[s.area, { paddingTop: insets.top }]}>
        <ModalHeader title={t('NewHabit.title')} />
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
                  multiline
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
                  multiline
                />
              )}
            />
          </View>
          <LinkToForm
            label={t('NewHabit.goal')}
            value={goal === 0 ? t('NewHabit.none') : `${goal} ${t('NewHabit.days')}`}
            onPress={() => router.push('/new-habit/goal')}
          />
          <LinkToForm
            label={t('NewHabit.reminder')}
            value={reminderDays}
            onPress={() => router.push('/new-habit/reminder')}
          />
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

        <BottomGradient />
        <Button
          style={[s.saveButtonWrapper, { bottom: insets.bottom + 15 }]}
          contentStyle={s.saveButtonContent}
          mode="contained"
          onPress={handleSubmit((data) => onSubmit(data))}
          textColor="#fff"
          disabled={!name}
        >
          {t('NewHabit.save')}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
