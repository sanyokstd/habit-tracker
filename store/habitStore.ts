import { IHabit } from '@/types/habits';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type habitStore = {
  id: number;
  habits: IHabit[];
  addHabit: (habit: IHabit) => void;
  clear: () => void;
};

export const useHabitStore = create<habitStore>()(
  persist(
    (set) => ({
      id: -1,
      habits: [],
      addHabit: (newHabit) => {
        set((state) => {
          const newId = state.id - 1;
          const newHabitWithId: IHabit = { ...newHabit, id: newId, goalPassed: 0, reminder: [] };
          const oldHabits = state.habits;
          return { habits: [newHabitWithId, ...oldHabits], id: newId };
        });
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
