import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './storage';
import {IHabit} from 'types/habits';

interface IUserStore {
  user: string;
  habits: IHabit[];
  isAuthenticated: boolean;
  setUser: (name: string) => void;
  createHabit: (habit: IHabit) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const userStore = create(
  persist<IUserStore>(
    set => ({
      user: 'user name',
      isAuthenticated: false,
      habits: [],
      setUser: (name: string) => set(() => ({user: name})),
      createHabit: (habit: IHabit) =>
        set(state => ({habits: [...state.habits, habit]})),
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set(() => ({isAuthenticated})),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
