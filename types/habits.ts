export const colors = {
  yellow: '#fbc02d',
  green: '#388e3c',
  red: '#d32f2f',
  blue: '#1976d2',
} as const;

export const colorsLight = Object.fromEntries(
  Object.entries(colors).map(([key, value]) => [`${key}Light`, `${value}4D`])
) as Record<`${keyof typeof colors}Light`, string>;

export type ColorKeys = keyof typeof colors;
export type ColorLightKeys = keyof typeof colorsLight;

export type HabitColor = (typeof colors)[ColorKeys];
export type HabitColorLight = (typeof colorsLight)[ColorLightKeys];

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
  colorLight: HabitColorLight;
  passedDays: string[];
  goal?: number;
  reminder: ReminderValue[];
}

export type HabitFormData = {
  name: string;
  desc: string;
  icon: string;
  color: string;
  goal: number;
  reminder: ReminderValue[];
};
