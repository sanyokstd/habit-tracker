import {IHabitDays} from 'types/habits';

export interface FormValues {
  habitName: string;
  habitDescription?: string;
  days: IHabitDays;
}
