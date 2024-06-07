import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './storage';

interface IUserStore {
  user: string;
  setUser: (name: string) => void;
}

export const userStore = create(
  persist<IUserStore>(
    set => ({
      user: 'user name',
      setUser: (name: string) => set(() => ({user: name})),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
