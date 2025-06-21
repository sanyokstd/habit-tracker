import { habitIconNames } from '@/constants/iconNames';
import { colors, IHabit } from '@/types/habits';
import { format } from 'date-fns';
import { Stack, useLocalSearchParams } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useHabitStore } from '@/store/habitStore';
import { useEffect } from 'react';

export default function EditHabitLayout() {
  const { getHabitById } = useHabitStore();
  const { id } = useLocalSearchParams<{ id: string }>();

  const formMethods = useForm<IHabit>({
    defaultValues: {
      name: '',
      description: '',
      icon: habitIconNames[0],
      color: colors.yellow,
      goal: 0,
      reminder: [],
      passedDays: [],
      createdAt: format(new Date(), 'yyyy-MM-dd'),
    },
    mode: 'onBlur',
  });

  // Заповнюємо форму даними існуючої звички, якщо передано id
  useEffect(() => {
    if (id) {
      const habitId = parseInt(id);
      const existingHabit = getHabitById(habitId);
      if (existingHabit) {
        formMethods.reset(existingHabit);
      }
    }
  }, [id, getHabitById, formMethods]);

  return (
    <FormProvider {...formMethods}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="reminder" />
        <Stack.Screen name="goal" />
      </Stack>
    </FormProvider>
  );
}
