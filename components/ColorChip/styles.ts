import { ImageBackground } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const styles = (theme: MD3Theme) => ({
  chip: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  chipSelected: {
    backgroundColor: theme.colors.primary,
  },
  selectedIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});
