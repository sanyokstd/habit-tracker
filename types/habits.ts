import { colors, colorsLight } from '@/constants/colors';

export interface IHabit {
  id: number;
  name: string;
  description: string;
  color: HabitColor;
  colorLight: HabitColorLight;
  passedDays: string[];
}

export type HabitColor = (typeof colors)[keyof typeof colors];
export type HabitColorLight = (typeof colorsLight)[keyof typeof colorsLight];
