export const colors = {
  yellow: '#fbc02d',
  green: '#388e3c',
  red: '#d32f2f',
  blue: '#1976d2',
} as const;

export const colorsLight = {
  yellowLight: 'rgba(251, 192, 45, 0.3)',
  greenLight: 'rgba(56, 142, 60, 0.3)',
  redLight: 'rgba(211, 47, 47, 0.3)',
  blueLight: 'rgba(25, 118, 210, 0.3)',
} as const;

export type HabitColor = (typeof colors)[keyof typeof colors];
export type HabitColorLight = (typeof colorsLight)[keyof typeof colorsLight];

export interface IHabit {
  id: number;
  name: string;
  description: string;
  color: HabitColor;
  colorLight: HabitColorLight;
  passedDays: string[];
}
