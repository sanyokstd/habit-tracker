import { createContext, useContext, useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/useColorScheme';

export type ThemeMode = 'dark' | 'light' | 'default';

type ThemeContextType = {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme(); // 'dark' або 'light' з системи
  const [themeMode, setThemeMode] = useState<ThemeMode>('default');

  useEffect(() => {
    // Завантажуємо тему з AsyncStorage при старті
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('themeMode');
      if (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'default') {
        setThemeMode(savedTheme);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    // Зберігаємо тему при зміні
    AsyncStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const theme =
    themeMode === 'dark'
      ? DarkTheme
      : themeMode === 'light'
        ? DefaultTheme
        : systemColorScheme === 'dark'
          ? DarkTheme
          : DefaultTheme;

  return <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
