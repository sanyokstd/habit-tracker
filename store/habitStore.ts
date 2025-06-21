import { IHabit } from '@/types/habits';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type habitStore = {
  id: number;
  habits: IHabit[];
  addHabit: (habit: IHabit) => void;
  checkHabitDay: (habitId: number, date: string) => void;
  updateHabit: (habit: IHabit) => void;
  deleteHabit: (id: number) => void;
  getHabitById: (id: number) => IHabit | undefined;
  clear: () => void;
};

export const useHabitStore = create<habitStore>()(
  persist(
    (set, get) => ({
      id: -1,
      habits: [],
      addHabit: (newHabit) => {
        set((state) => {
          const newId = state.id - 1;
          const newHabitWithId: IHabit = { ...newHabit, id: newId, reminder: [] };
          const oldHabits = state.habits;
          return { habits: [newHabitWithId, ...oldHabits], id: newId };
        });
      },
      updateHabit: (habit: IHabit) => {
        set((state) => {
          const habitIndex = state.habits.findIndex((item) => item.id === habit.id);
          if (habitIndex === -1) return state;
          const updatedHabits = [...state.habits];
          updatedHabits[habitIndex] = habit;
          return { habits: updatedHabits };
        });
      },
      deleteHabit: (id: number) => {
        set((state) => {
          const updatedHabits = state.habits.filter((habit) => habit.id !== id);
          return { habits: updatedHabits };
        });
      },
      checkHabitDay: (id, date) => {
        set((state) => {
          const habitIndex = state.habits.findIndex((item) => item.id === id);
          if (habitIndex === -1) return state;

          const habit = state.habits[habitIndex];
          const hasDate = habit.passedDays.includes(date);

          const updatedPassedDays = hasDate
            ? habit.passedDays.filter((d) => d !== date)
            : [...habit.passedDays, date];

          const updatedHabit = { ...habit, passedDays: updatedPassedDays };

          const updatedHabits = [...state.habits];
          updatedHabits[habitIndex] = updatedHabit;

          return { habits: updatedHabits };
        });
      },
      getHabitById: (id: number) => {
        const state = get();
        return state.habits.find((habit) => habit.id === id);
      },
      clear: () => {
        set({ id: 0, habits: [] });
      },
    }),
    {
      name: 'habit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
