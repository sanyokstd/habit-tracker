import { HabitFormData } from '@/types/habits';
import { getColorValues } from '@/utils/getColorValues';
import { Stack } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { habitIconNames } from '@/constants/iconNames';

export default function NewHabitLayout() {
  const colors = getColorValues(false);
  const formMethods = useForm<HabitFormData>({
    defaultValues: {
      name: '',
      desc: '',
      icon: habitIconNames[0],
      color: colors[0],
      goal: 0,
      reminder: [],
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: undefined,
    criteriaMode: 'all',
  });

  formMethods.register('name', {
    required: 'Name is required',
  });

  formMethods.register('desc', {
    required: 'Description is required',
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
