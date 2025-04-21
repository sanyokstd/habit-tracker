import { IoniconName } from '@/constants/iconNames';

export const colors = {
  yellow: '#fbc02d',
  green: '#388e3c',
  red: '#d32f2f',
  blue: '#1976d2',
} as const;

export type ColorKeys = keyof typeof colors;

export type HabitColor = (typeof colors)[ColorKeys];

export const remindersDays = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
} as const;

export type ReminderValue = (typeof remindersDays)[keyof typeof remindersDays];

export interface IHabit {
  id: number;
  name: string;
  description: string;
  color: HabitColor;
  icon: IoniconName;
  passedDays: string[];
  reminder: ReminderValue[];
  goal?: number;
}
