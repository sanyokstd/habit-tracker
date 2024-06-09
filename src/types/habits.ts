export interface IHabit {
  name: string;
  description: string;
  days: IHabitDays;
}

export interface IHabitDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}
