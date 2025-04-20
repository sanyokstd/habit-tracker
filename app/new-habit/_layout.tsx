import { habitIconNames } from '@/constants/iconNames';
import { colors, IHabit } from '@/types/habits';
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
    },
    mode: 'onBlur',
  });

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
