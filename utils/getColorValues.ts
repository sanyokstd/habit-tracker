import { colors, colorsLight, HabitColor, HabitColorLight } from '@/types/habits';

export const getColorValues = (isDarkTheme: boolean): HabitColor[] | HabitColorLight[] => {
  return Object.values(isDarkTheme ? colorsLight : colors);
};
