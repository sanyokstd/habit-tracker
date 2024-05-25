import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

import {StateStorage} from 'zustand/middleware';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

interface IUserStore {
  user: string; 
  setUser: (name: string) => void;
}

export const userStore = create(
  persist<IUserStore>(
    (set, get) => ({
      user: 'user name',
      setUser: (name: string) => set(() => ({ user: name })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
