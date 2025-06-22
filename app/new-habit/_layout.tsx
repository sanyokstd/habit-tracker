import { habitIconNames } from '@/constants/iconNames';
import { colors, IHabit } from '@/types/habits';
import { format } from 'date-fns';
import { Stack } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';

export default function NewHabitLayout() {
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

  return (
    <FormProvider {...formMethods}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="reminder" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="goal" options={{ animation: 'slide_from_right' }} />
      </Stack>
    </FormProvider>
  );
}
