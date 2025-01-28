import { StyleSheet } from 'react-native';
import { MD3Theme, useTheme as usePaperTheme } from 'react-native-paper';

export const useTheme = (styles: (theme: MD3Theme) => Record<string, any>) => {
  const theme = usePaperTheme(); // Отримуємо тему з react-native-paper
  const s = StyleSheet.create(styles(theme)); // Створюємо стилі на основі теми
  return { s, theme };
};
