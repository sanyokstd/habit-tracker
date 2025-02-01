import { Stack } from 'expo-router';

export default function NewHabitLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="reminder" />
      <Stack.Screen name="goals" />
    </Stack>
  );
}
