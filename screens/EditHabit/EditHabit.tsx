import { BottomGradient, HabitForm, ModalHeader } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { useHabitStore } from '@/store/habitStore';
import { IHabit } from '@/types/habits';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

export const EditHabit: React.FC = () => {
  const { updateHabit, deleteHabit } = useHabitStore();
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { s, theme } = useTheme(styles);
  const insets = useSafeAreaInsets();
  const { handleSubmit, watch } = useFormContext<IHabit>();
  const name = watch('name');

  const onSubmit = (data: IHabit) => {
    if (id) {
      const habitId = parseInt(id);
      const updatedHabit = { ...data, id: habitId };
      updateHabit(updatedHabit);
    }
    router.back();
  };

  const handleDelete = () => {
    if (id) {
      Alert.alert(t('EditHabit.deleteTitle'), t('EditHabit.deleteMessage'), [
        {
          text: t('EditHabit.cancel'),
          style: 'cancel',
        },
        {
          text: t('EditHabit.delete'),
          style: 'destructive',
          onPress: () => {
            const habitId = parseInt(id);
            deleteHabit(habitId);
            router.back();
          },
        },
      ]);
    }
  };

  return (
    <View style={[s.area, { paddingTop: insets.top }]}>
      <ModalHeader title={t('EditHabit.title')} />
      <HabitForm goalRoute="/edit-habit/goal" />

      <BottomGradient />
      <View style={[s.buttonContainer, { bottom: insets.bottom + 15 }]}>
        <Button
          style={[s.deleteButton, s.button]}
          contentStyle={s.buttonContent}
          mode="outlined"
          onPress={handleDelete}
          textColor={theme.colors.error}
        >
          {t('EditHabit.delete')}
        </Button>
        <Button
          style={[s.saveButton, s.button]}
          contentStyle={s.buttonContent}
          mode="contained"
          onPress={handleSubmit((data) => onSubmit(data))}
          textColor="#fff"
          disabled={!name}
        >
          {t('EditHabit.save')}
        </Button>
      </View>
    </View>
  );
};
